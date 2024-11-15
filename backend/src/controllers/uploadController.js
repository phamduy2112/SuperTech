import cloudinary from '../config/cloudinaryConfig.js';
import multer from 'multer';
import ImageModel from '../models/image_product.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFields = upload.fields([
    { name: 'image_one', maxCount: 1 },
    { name: 'image_two', maxCount: 1 },
    { name: 'image_three', maxCount: 1 },
    { name: 'image_four', maxCount: 1 }
  ]);

  const uploadImages = async (req, res) => {
    try {
      const files = req.files;
      if (!files) {
        return res.status(400).json({ error: 'No files were uploaded.' });
      }
  
      const imageFields = ['image_one', 'image_two', 'image_three', 'image_four'];
      const uploadPromises = imageFields.filter(field => files[field] && files[field].length > 0).map(async field => {
        const file = files[field][0];
        if (!file) {
          throw new Error(`File for ${field} is missing.`);
        }
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ resource_type: 'image' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }).end(file.buffer);
        });
        return { [field]: result.public_id.split('/').pop() };
      });
  
      const results = await Promise.all(uploadPromises);
      const imageNames = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      const resp=await ImageModel.create(imageNames);
  
      res.json({ message: 'Images uploaded successfully', data: resp });
    } catch (error) {
      console.error("Error uploading images:", error);
      res.status(500).json({ error: 'Error uploading images' });
    }
  };

export { uploadImages, uploadFields };