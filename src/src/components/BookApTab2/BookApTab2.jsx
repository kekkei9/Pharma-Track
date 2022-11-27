import React from 'react'
import InputForm from '../InputForm/InputForm'
import './BookApTab2.scss'


const BookApTab2 = (props) => {
  return <div className="Container">
    <div>
      1.Thông tin người đăng ký
    </div>
    <div>
      <InputForm title = 'Họ và tên (*)' placeholder = 'Họ và tên' className = 'tw-max-w-xl'>
        </InputForm> 
    </div>
  </div>
}

export default BookApTab2
