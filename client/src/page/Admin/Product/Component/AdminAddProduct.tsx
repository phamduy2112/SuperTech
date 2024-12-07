import { Modal, Select, Upload, UploadFile } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getCatelogryThunk } from '../../../../redux/catelogry/catelogry.slice';
import { createProductAdminThunk } from '../../../../redux/product/product.slice';
import { IoMdClose } from 'react-icons/io';
import { getImageProductByImage } from '../../../../service/product/product.service';
import { IMG_BACKEND } from '../../../../constants';
import ModalAdminProduct from './ModalAdminProduct';
import FormikProductInforForm from './AdminInforProduct';

function AdminAddProduct() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [image, setImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);  // State for modal visibility
  const listCatelogry = useAppSelector(state => state.category.listCatelories);
  const listProductColor = useAppSelector(state => state.product.productColors);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatelogryThunk(""));
  }, [dispatch]);

  const formattedCategories = listCatelogry?.map(category => ({
    value: category.category_id,
    label: category.category_name,
    category_dad: category.category_dad
  }));
  const Datahe = [
    {
      value: '1',
      label: 'Ios',
    },
    {
      value: '2',
      label: 'Android',
    },
    {
      value: '3',
      label: 'HDD Level 3',
    },
  ];

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];
  const initialValues = {
    category: '',
    price: '',
    discount: 0,
    product_name: "",
    hot: 0,
    quantity: 0,
    infor_screen: "",
    infor_system: "",
    infor_cpu: "",
    infor_ram: "",
    moTa: "",
  };
  const Datagiamgia = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 10,
      label: '10%',
    },
   
    {
      value: 5,
      label: '5%',
    },
    

  ]
  const validationSchema = Yup.object({
    category: Yup.string().required('Danh mục sản phẩm là bắt buộc'),
    price: Yup.number().required('Giá sản phẩm là bắt buộc').positive('Giá phải là số dương'),
  });

  const handleCategoryChange = (category_dad) => {
    setSelectedCategory(category_dad);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);  // Close the modal
  };

  const handleSubmit = (values) => {
    const dataInforProduct = {
      infor_screen: values.infor_screen,
      infor_system: values.infor_system,
      infor_cpu: values.infor_cpu,
      infor_ram: values.infor_ram,
      infor_more: values.moTa,
      product_name: values.product_name,
      product_price: values.price,
      product_hot: values.hot,
      product_quantity: values.quantity,
      product_discount: values.discount,
      category_id: values.category,
      listProductColor: listProductColor,
    };
    dispatch(createProductAdminThunk(dataInforProduct));
  };

  return (
    <div className="flex-1 bg-[#f2edf3] p-[24px]">
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Tạo Sản Phẩm Mới
      </button>

      <Modal
        title="Tạo Sản Phẩm Mới"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
           {({ setFieldValue, values }) => (
    <Form className="flex flex-col gap-4">
      {/* Chọn loại sản phẩm */}
      <div className="flex gap-[1%]">
        <div className="flex w-[49%] h-auto flex-col gap-4">
          <label htmlFor="category" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Loại sản phẩm</label>
          <Select
            value={values.category}  // bind value to Formik state
            defaultValue = 'Mời bạn chọn'

            onChange={(value,category_dad) => 
            {
              setFieldValue('category', value);
              handleCategoryChange(category_dad.category_dad)
            }  
            
            } // update Formik state when changed
            options={formattedCategories}
            className="h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none"
          />
        </div>
        {/* Nhập giá sản phẩm */}
        <div className="flex w-[49%] h-auto flex-col gap-4">
          <label htmlFor="price" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Giá sản phẩm</label>
          <Field
            type="number"
            name="price"
            className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
            placeholder="Nhập giá sản phẩm"
          />
          <ErrorMessage name="price" component="div" className="text-[1.5rem] text-red-500" />
        </div>
     
      </div>
       <div className="flex w-[100%] h-auto flex-col gap-4">
          <label htmlFor="price" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Tên sản phẩm</label>
          <Field
            type="text"
            name="product_name"
            className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
            placeholder="Nhập tên sản phẩm"
          />
          <ErrorMessage name="product_name" component="div" className="text-[1.5rem] text-red-500" />
        </div>
        <div className='flex gap-[1%]'>
        <div className="flex w-[49%] h-auto flex-col gap-4">
          <label htmlFor="hot" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Hot</label>
          <Field
            type="text"
            name="hot"
            className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
            placeholder="Nhập tên sản phẩm"
          />
          <ErrorMessage name="hot" component="div" className="text-[1.5rem] text-red-500" />
        </div>
          {/* Chọn mức giảm giá */}
          <div className="flex w-[49%] h-auto flex-col gap-4">
          <label htmlFor="hot" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Giảm giá</label>
          <Select
            value={values.discount}  // bind value to Formik state
            onChange={(value) => setFieldValue('discount', value)}  // update Formik state when changed
            options={Datagiamgia}
            className="h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none"
          />
        </div>
        </div>

        {(selectedCategory == '1' || selectedCategory == '2') && (
          <FormikProductInforForm/>
        )}

<ModalAdminProduct/>
<div>
{listProductColor?.map((item) => (
              <div
                  key={item.color}
              
                  className={`relative flex w-[25%] items-center gap-3 border py-4 px-6 rounded-md cursor-pointer hover:shadow-md }`}
              >
                <div className='absolute right-0 top-0 text-[1.5rem]'>
                  <IoMdClose />
                </div>
                  <img 
                      src={`${IMG_BACKEND}/${image}`}
                      alt={item.color} 
                      className="w-20 rounded-md"
                  />
                  <div>
                      <h4 className="font-semibold text-[1.5rem]">Màu sắc: {item?.color}</h4>
                      <p className="text-red-500 font-semibold text-[1.2rem]">Dung lượng: {item.productStorage?.map((item)=>{
                        return item.storage
                      })}</p>
                  </div>
              </div>
          ))}
</div>
        <div className="bg-white shadow-lg rounded-xl p-[12px] gap-3 flex flex-col">
          <div className="col-span-3 flex h-[400px] overflow-y-hidden flex-col gap-4">
            <label htmlFor="moTa" className="text-[13px] text-[#81818177] font-medium">Mô tả</label>
            <ReactQuill
              theme="snow"
              value={values.moTa}
            onChange={(value) => setFieldValue('moTa', value)}  // update Formik state when changed
              modules={{
                toolbar: toolbarOptions,
              }}
              className="h-[100%] bg-[#81818113] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-sm p-2"
            />
          </div>
        </div>

      {/* Submit Button */}
        <button type="submit" className="text-center bg-[#1A73E8] text-white text-[1.5rem] py-2 px-6 rounded-lg">
          Thêm sản phẩm
        </button>
      
    </Form>
  )}
</Formik>
      </Modal>
    </div>
  );
}

export default AdminAddProduct;