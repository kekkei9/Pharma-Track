import React from 'react'
import './Header.scss'
import HeaderLink from '../HeaderLink/HeaderLink'
import { useParams, useNavigate } from 'react-router-dom'


const Header = (props) => {
  const {page} = useParams() 
  const navigate = useNavigate()

  const navNames = [
    {
      'title': 'Trang chủ',
      'page': 'home'
    },
    {
      'title': 'Đăng kí khám bệnh',
      'page': 'bookap'
    },
    {
      'title': 'Tra cứu',
      'page': 'role'
    }
  ]
  return (<div className="Header tw-px-24 tw-flex tw-flex-row tw-p-5 tw-fixed tw-w-screen tw-top-0 tw-justify-between">
    <div className='tw-flex tw-flex-row tw-items-center '>
      <img src='/assets/dogtor.png' alt='dogtor' width='60px' height='60px' className='tw-rounded-full'></img>
      <div className='tw-font-bold tw-text-4xl tw-text-white tw-ml-2'>Pharma Track</div>
    </div>
    <div className='tw-flex tw-flex-row tw-items-center'>
      {navNames.map((navName) => (
        <div className='tw-ml-7 tw-text-white tw-font-semibold tw-text-base'>
          <HeaderLink {...navName} selected={page===navName.page}/>
        </div>
      ))}
      <div className = 'RegBtn tw-px-4 tw-py-1.5 tw-bg-white tw-font-semibold tw-text-base tw-ml-7'
        onClick={() => navigate('/login')}>
        Đăng nhập
      </div>
    </div>
  </div>)
}

export default Header
