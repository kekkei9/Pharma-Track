import React from 'react'
import './Header.scss'


const Header = (props) => {
  const navNames = ['Trang chủ', 'Đăng kí khám bệnh', 'Tra cứu']
  return (<div className="Header tw-px-24 tw-flex tw-flex-row tw-p-5 tw-fixed tw-w-screen tw-justify-between">
    <div className='tw-flex tw-flex-row tw-items-center '>
      <img src='assets/dogtor.png' alt='dogtor' width='60px' height='60px' className='tw-rounded-full'></img>
      <div className='tw-font-bold tw-text-4xl tw-text-white'>Pharma Track</div>
    </div>
    <div className='tw-flex tw-flex-row tw-items-center'>
      {navNames.map((navName) => (
        <div className='tw-ml-7 tw-text-white tw-font-semibold tw-text-base'>{navName}</div>
      ))}
      <div className = 'RegBtn tw-px-4 tw-py-1.5 tw-bg-white tw-font-semibold tw-text-base tw-ml-7'>
        Đăng nhập
      </div>
    </div>
  </div>)
}

export default Header
