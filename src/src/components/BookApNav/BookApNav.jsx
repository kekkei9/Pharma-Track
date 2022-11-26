import React from 'react'
import './BookApNav.scss'


const BookApNav = (props) => {

  return <div className="BookApNav tw-mt-8 tw-pl-48 tw-pr-16 tw-flex tw-py-5 tw-w-screen tw-justify-between tw-items-center">
    <div className = ' tw-font-normal tw-text-3xl tw-text-black'>Đặt lịch khám bệnh</div>
    <div className = ' tw-flex tw-flex-row tw-items-center'>
      <div className = ' tw-text-black  tw-text-base'>Trang chủ</div>
      <div className = 'tw-ml-3 tw-text-black tw-text-base'>/ Đặt lịch khám bệnh</div>      
    </div>
  </div>
}

export default BookApNav
