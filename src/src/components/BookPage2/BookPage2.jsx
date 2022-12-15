import React from 'react'
import './BookPage2.scss'
import { Form, Field } from "formik";
import { Form as AntdForm, Button } from "antd";
import {
  AntInput,
  AntSelect,
  AntDatePicker,
  AntTimePicker
}from "../CreateAntField/CreateAntField";

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

//{ handleSubmit, values, submitCount }
const BookPage2 = ({ handleSubmit, values, submitCount }) => {
  return <div className="BookPage2"> 


  <Form className="form-container"
        onSubmit={handleSubmit}
      >
<div className = 'header tw-text-xl tw-font-bold tw-pb-5 '>1.Thông tin người đăng ký khám</div>
<div className='col tw-flex tw-flex-col tw-items-center'>
<div  className='row tw-flex tw-flex-row'>
         <Field
          component={AntInput}
          name="fullname"
          type="textarea"
          label="Họ và tên"
          validate={validateFullName}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px"
          }}
          placeholder="Họ và tên"
        />

        <Field
          component={AntDatePicker}
          name="birthday"
          type="date"
          label="Ngày sinh "
          validate={validateBirthDay}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Ngày/Tháng/Năm "
        />
</div>
<div  className='row tw-flex tw-flex-row'>
        <Field
          component={AntInput}
          name="gender"
          type="gender"
          label="Giới tính "
          validate={validateGioiTinh}
          // submitCount={submitCount}
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
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Email "
        />
</div>
<div  className='row tw-flex tw-flex-row'>
        <Field
          component={AntInput}
          name="address"
          type="textarea"
          label="Địa chỉ"
          validate={validateDiaChi}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Địa chỉ"
        />

        <Field
          component={AntInput}
          name="phonenumber"
          type="textarea"
          label="Số điện thoại"
          validate={validatePhoneNumber}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Số điện thoại"
        />
</div>

<div  className='row tw-flex tw-flex-row'>
          <Field
          component={AntInput}
          name="symptom"
          type="textarea"
          label="Triệu chứng"
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "640px",
            height: "80px"
          }}
          placeholder="Triệu chứng"
        />
        </div>   
        </div>
<div className = 'header tw-text-xl tw-font-bold tw-pb-5'>2.Thông tin đăng ký khám</div>
<div className='col tw-flex tw-flex-col tw-items-center'>
<div  className='row tw-flex tw-flex-row '>     
        <Field
          component={AntDatePicker}
          name="date"
          type="date"
          label="Ngày hẹn khám "
          validate={validateDate}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Ngày/Tháng/Năm "
        />
        
        <Field
          component={AntTimePicker}
          name="time"
          type="time"
          label="Thời gian hẹn mong muốn "
          validate={validateTime}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
            height:"38px",
            borderRadius:"10px"
          }}
          placeholder="Thời gian hẹn khám "
        />
  </div>
  </div>
  </Form>

  <div className = ' tw-text-red-600 tw-pl-4 tw-list-disc tw-items-center'>
      <div className=' tw-font-bold'>Lưu ý:</div>
      <ul className = 'tw-list-disc tw-pl-5 tw-align-center'>
        <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho dịch vụ khám bệnh</li>
        <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc (VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại,
        CCCD/Mã định danh công dân/HC ...)</li>
        <li>Bằng việc nhấn nút "Tiếp tục", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.</li>
      </ul>
    </div>
</div>

}

export default BookPage2