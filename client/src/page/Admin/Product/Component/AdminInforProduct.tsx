import { Button, Form, Input } from 'antd';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  infor_product: Yup.string().required('Thông tin sản phẩm không được để trống'),
  infor_screen: Yup.string().required('Thông tin màn hình không được để trống'),
  infor_system: Yup.string().required('Thông tin hệ điều hành không được để trống'),
  infor_cpu: Yup.string().required('Thông tin CPU không được để trống'),
  infor_ram: Yup.number().min(0, 'Số RAM không hợp lệ').required('Số RAM không được để trống'),
  infor_compan: Yup.string().required('Thông tin công ty không được để trống'),
  infor_rom: Yup.number().min(0, 'Bộ nhớ trong không hợp lệ').required('Bộ nhớ trong không được để trống'),
  infor_frontCamera: Yup.string().required('Thông tin camera trước không được để trống'),
  infor_rearCamera: Yup.string().required('Thông tin camera sau không được để trống'),
  infor_scanning_frequency: Yup.string().required('Thông tin tần số quét không được để trống'),
  infor_chip_battery: Yup.string().required('Thông tin chip và pin không được để trống'),
  infor_more: Yup.string().required('Thông tin thêm không được để trống'),
});

const FormikProductInforForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <Formik
      initialValues={{
      
        infor_screen: '',
        infor_system: '',
        infor_cpu: '',
        infor_ram: 0,
        infor_compan: '',
        infor_rom: 0,
        infor_frontCamera: '',
        infor_rearCamera: '',
        infor_scanning_frequency: '',
        infor_chip_battery: '',
        infor_more: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
        <div className="grid grid-cols-3 gap-4">
              <div className="flex h-auto flex-col gap-4">
              <label htmlFor="infor_screen" className="text-[13px] font-medium">Thông tin màn hình</label>
                  
                        <Field
              name="infor_screen"
              type="text"
              as={Input}
              value={values.infor_screen}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Kích thước màn hình"
              className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
              />
                        <ErrorMessage name="infor_screen" component="div" className="text-[1.5rem] text-red-500" />

              </div>
             
              <div className="flex h-auto flex-col gap-4">
              <label htmlFor="infor_cpu" className="text-[13px] font-medium">Cpu</label>
                      <Field
                        type="number"
                        name="infor_cpu"
                        placeholder="Kích thước màn hình"
                        className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                        />
              </div>
              <div className="flex h-auto flex-col gap-4">
              <label htmlFor="infor_ram" className="text-[13px] font-medium">Ram</label>
                      <Field
                        type="number"
                        name="infor_ram"
                        placeholder="Kích thước màn hình"
                        className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                        />
              </div>
            
              <div className="flex h-auto flex-col gap-4">
                <label htmlFor="os" className="text-[13px] text-[#81818177] font-medium">Hệ điều hành</label>
              
              </div>
              
            </div>
        


          <div className="form-group">
            <label htmlFor="infor_system">Thông tin hệ điều hành</label>
            <Field
              name="infor_system"
              type="text"
              as={Input}
              value={values.infor_system}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_system && touched.infor_system && <div>{errors.infor_system}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_cpu">Thông tin CPU</label>
            <Field
              name="infor_cpu"
              type="text"
              as={Input}
              value={values.infor_cpu}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_cpu && touched.infor_cpu && <div>{errors.infor_cpu}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_ram">Số RAM</label>
            <Field
              name="infor_ram"
              type="number"
              as={Input}
              value={values.infor_ram}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_ram && touched.infor_ram && <div>{errors.infor_ram}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_compan">Thông tin công ty</label>
            <Field
              name="infor_compan"
              type="text"
              as={Input}
              value={values.infor_compan}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_compan && touched.infor_compan && <div>{errors.infor_compan}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_rom">Bộ nhớ trong</label>
            <Field
              name="infor_rom"
              type="number"
              as={Input}
              value={values.infor_rom}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_rom && touched.infor_rom && <div>{errors.infor_rom}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_frontCamera">Thông tin camera trước</label>
            <Field
              name="infor_frontCamera"
              type="text"
              as={Input}
              value={values.infor_frontCamera}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_frontCamera && touched.infor_frontCamera && <div>{errors.infor_frontCamera}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_rearCamera">Thông tin camera sau</label>
            <Field
              name="infor_rearCamera"
              type="text"
              as={Input}
              value={values.infor_rearCamera}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_rearCamera && touched.infor_rearCamera && <div>{errors.infor_rearCamera}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_scanning_frequency">Tần số quét</label>
            <Field
              name="infor_scanning_frequency"
              type="text"
              as={Input}
              value={values.infor_scanning_frequency}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_scanning_frequency && touched.infor_scanning_frequency && <div>{errors.infor_scanning_frequency}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_chip_battery">Thông tin chip và pin</label>
            <Field
              name="infor_chip_battery"
              type="text"
              as={Input}
              value={values.infor_chip_battery}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_chip_battery && touched.infor_chip_battery && <div>{errors.infor_chip_battery}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="infor_more">Thông tin thêm</label>
            <Field
              name="infor_more"
              type="text"
              as={Input}
              value={values.infor_more}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input-field"
            />
            {errors.infor_more && touched.infor_more && <div>{errors.infor_more}</div>}
          </div>

          <Button type="primary" htmlType="submit">Lưu sản phẩm</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikProductInforForm;
