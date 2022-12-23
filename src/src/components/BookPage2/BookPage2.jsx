import React from 'react'
import './BookPage2.scss'
import { Form, Field } from "formik";
import { Checkbox } from 'antd';
import { Form as AntdForm, Button } from "antd";

import {
  AntInput,
  AntSelect,
  AntDatePicker,
  AntTimePicker
}from "../CreateAntField/CreateAntField"
import { 
  validateFullName,
  validateDiaChi,
  validateBirthDay,
  validateDate,
  validateEmailBooking,
  validateGioiTinh,
  validateTime,
  isRequired,
  validatePhoneNumber
 } from '../ValidateFields/ValidateFields';

 const FormItem = AntdForm.Item;

 export const dateFormat = "MM-DD-YYYY";

 const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const BookPage2 = ({ handleSubmit, values, submitCount }) => {
  return <div className="BookPage2"> 


  <Form className="form-container"
        onSubmit={handleSubmit}
      >
<div className = 'header tw-text-xl tw-font-bold tw-pb-5 '>1.Thông tin phòng khám đăng kí khám</div>
<div className='tw-flex tw-flex-row tw-items-stretch'>
<div className='imageDoctor tw-self-center'>     
      <img
        src="/assets/avatardoctor.png"
        alt="doctor"
        width="200px"
        height="300px"
        className="tw-rounded-md"
      />
  </div>
<div className='doctorProfile'>
        <Field
          component={AntInput}
          name="fullname"
          type="textarea"
          label="Họ và tên bác sĩ"
         // validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          defaultValue="Nguyễn Văn A"
          disabled={true}
        />
         <Field
          component={AntInput}
          name="chuyenkhoa"
          type="textarea"
          label="Chuyên khoa"
          //validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          defaultValue="Da liễu"
          disabled={true}
        />
        <Field
          component={AntInput}
          name="yearEx"
          type="textarea"
          label="Số năm kinh nghiệm"
          //validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          defaultValue="4 năm"
          disabled={true}
        />
        <Field
          component={AntInput}
          name="addressRoom"
          type="textarea"
          label="Địa chỉ phòng khám"
          //validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",

          }}
          defaultValue="70 Lê Thánh Tôn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
          disabled={true}
        />
        
        <Field
          component={AntInput}
          name="numberRoom"
          type="textarea"
          label="Số điện thoại phòng khám"
          //validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          defaultValue="0935123456"
          disabled={true}
        />
</div>
</div>
<div className = 'header tw-text-xl tw-font-bold tw-pb-5 '>2.Thông tin người đăng ký khám</div>
<div className='col tw-flex tw-flex-col tw-items-center'>
<div  className='row tw-flex tw-flex-row'>
         <Field
          component={AntInput}
          name="fullname"
          type="textarea"
          label="Họ và tên"
          validate={validateFullName}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          placeholder="Họ và tên"
        />

        <Field
          component={AntDatePicker}
          name="birthdayDate"
          type="date"
          label="Ngày sinh"
          defaultValue={values.birthdayDate}
          format={dateFormat}
          validate={validateBirthDay}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Ngày/Tháng/Năm "
        />
        <Field
          component={AntInput}
          name="cccd"
          type="textarea"
          label="Số CCCD/CMND"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          placeholder="Số CCCD/CMND"
        />
</div>
<div  className='row tw-flex tw-flex-row'>
        <Field
          component={AntInput}
          name="gender"
          type="gender"
          label="Giới tính "
          validate={validateGioiTinh}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Nam/Nữ/Giới tính khác "
        />

        <Field
          component={AntInput}
          name="email"
          type="email"
          label="Email "
          validate={validateEmailBooking}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Email "
        />

          <Field
          component={AntInput}
          name="BHYT"
          type="ma"
          label="Số thẻ BHYT"
       //  validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Số thẻ BHYT "
        />
</div>
<div  className='row tw-flex tw-flex-row'>
    
        <Field
          component={AntInput}
          name="phonenumber"
          type="textarea"
          label="Số điện thoại"
          validate={validatePhoneNumber}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Số điện thoại"
        />

<Field
          component={AntInput}
          name="address"
          type="textarea"
          label="Địa chỉ"
          validate={validateDiaChi}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "640px",
          }}
          placeholder="Địa chỉ"
        />

</div>

<div  className='row tw-flex tw-flex-row'>
          <Field
          component={AntInput}
          name="symptom"
          type="textarea"
          label="Triệu chứng"
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "980px",
            height: "80px"
          }}
          placeholder="Triệu chứng"
        />
        </div>   
        </div>
<div className = 'header tw-text-xl tw-font-bold tw-pb-5'>3.Thông tin đăng ký khám</div>
<div className='col tw-flex tw-flex-col tw-items-center'>
<div  className='row tw-flex tw-flex-row '> 
          
        {/* <Field
          component={AntDatePicker}
          name="date"
          type="date"
          label="Ngày hẹn khám "
          defaultValue={values.date}
          format={dateFormat}
          validate={validateDate}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Ngày/Tháng/Năm "
        /> */}
        
        {/* <Field
          component={AntTimePicker}
          name="time"
          type="time"
          label="Thời gian hẹn mong muốn "
          validate={validateTime}
          submitCount={submitCount}
          defaultValue={values.time}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Thời gian hẹn khám "
        /> */}
  </div>
  </div>
  <div className = 'Note tw-text-red-600 tw-pl-4 tw-list-disc tw-items-center tw-w-3/5'>
      <div className=' tw-font-bold tw-text-xl'>Lưu ý và điều khoản:</div>
      <ul className = 'tw-list-disc tw-pl-5 tw-text-[16px] tw-align-center'>
        <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho dịch vụ khám bệnh</li>
        <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc (VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại,
        CCCD/Mã định danh công dân/HC ...)</li>
        <li>Vui lòng kiểm tra kỹ thông tin về bác sĩ bạn sẽ đặt khám để chắc rằng bạn đang kết nối đúng với bác sĩ chuyên khoa phù hợp</li>
        <li>Hãy tới đúng ngày, giờ đặt khám và đúng địa chỉ phòng khám để có được dịch vụ tốt nhất. </li>
        <li>Mọi thông tin trên của bạn được bảo mật và chỉ sử dụng cho phòng khám mà bạn đã đặt khám.</li>
        <li>Chúng tôi sẽ thu một khoản phí dịch vụ, vui lòng thanh toán và xin cảm ơn vì đã chọn chúng tôi</li>
        <li>Bằng việc đồng ý và nhấn nút "Tiếp tục", bạn hoàn toàn hiểu và chịu trách nhiệm với các thông tin đã cung cấp.</li>
      </ul>
    </div>
<div className='checkbox tw-items-center tw-w-3/5 '><Checkbox  onChange={onChange}>Tôi đã đọc kĩ và đồng ý với những điều khoản trên</Checkbox></div>
<div className='tw-flex tw-flex-row tw-justify-center tw-justify-evenly'>
    <div className="back-container "> 
    <FormItem >
    <Button
              danger
              style={{
                width: "100px",
                margin: "20px"
              }}
            >
              Quay lại
      </Button>
      </FormItem>
      </div>
  <div className="submit-container ">

          <FormItem >
            <Button
              type="primary"
              style={{
                width: "100px",
                margin: "4px"
              }}
              htmlType="submit"
            >
              Tiếp tục
            </Button>

          </FormItem>
        </div>
        </div>
  </Form>

 
  </div>
}

export default BookPage2