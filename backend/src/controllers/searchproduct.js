import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let Products = models.products; 
const searchProducts = async (req, res) => {
    try {
        const { tukhoa } = req.query;
        let products = await Products.findAll({
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('product_name')), 
                'LIKE', 
                '%' + tukhoa.toLowerCase() + '%'
            )
        });
        if (products.length > 0) {
            responseSend(res, products, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
export { searchProducts };