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
  isRequired
 } from '../ValidateFields/ValidateFields';

//{ handleSubmit, values, submitCount }
const BookPage2 = ({ handleSubmit, values, submitCount }) => {
  return <div className="BookPage2"> 

  {/* <div className = 'tw-text-xl tw-font-bold tw-pb-5'>1.Thông tin người đăng ký khám</div> */}
  <Form className="form-container tw-flex tw-flex-col tw-items-center"
        onSubmit={handleSubmit}
      >
         <Field
          component={AntInput}
          name="fullname"
          type="textarea"
          label="Họ và tên"
          validate={validateFullName}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
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
          }}
          placeholder="Ngày/Tháng/Năm "
        />
        {/* <Field
          component={AntSelect}
          name="gender"
          label="Giới tính"
          //defaultValue={values.province}
          selectOptions={values.genderOption}
          validate={validateGioiTinh}
          submitCount={submitCount}
          style={{ width: "300px" }}
          hasFeedback
          options={values.genderOption.map((gender) => {
            return { value: gender, label: gender };
          })}
          
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Field> */}

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
          validate={isRequired}
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "300px",
          }}
          placeholder="Số điện thoại"
        />

          <Field
          component={AntInput}
          name="symptom"
          type="textarea"
          label="Triệu chứng"
          // submitCount={submitCount}
          hasFeedback
          style={{
            width: "800px",
            height: "60px"
          }}
          placeholder="Triệu chứng"
        />
        {/* <div className = 'tw-text-xl tw-font-bold tw-pb-5'>2.Thông tin đăng ký khám</div> */}
            
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
          }}
          placeholder="Thời gian hẹn khám "
        />
  </Form>
{/* 
  <div className = ' tw-text-red-600 tw-pl-4 tw-list-disc'>
      <div className=' tw-font-bold'>Lưu ý:</div>
      <ul className = 'tw-list-disc tw-pl-5'>
        <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho dịch vụ khám bệnh</li>
        <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc (VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại,
        CCCD/Mã định danh công dân/HC ...)</li>
        <li>Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.</li>
      </ul>
    </div> */}
</div>

}

export default BookPage2