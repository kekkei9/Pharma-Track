import React from 'react'
import InputForm from '../InputForm/InputForm'
import PasswordForm from '../PasswordForm/PasswordForm'
import './LoginForm.scss'


const LoginForm = (props) => {
  const formDatas = [
    {
      'title': 'Tài khoản',
      'placeholder': 'Tên tài khoản, vd: NguyenVanA'
    },
    {
      'title': 'Mật khẩu',
      'placeholder': 'Mật khẩu, vd: 123456789'
    }
  ]

  return <div className="LoginForm tw-flex tw-flex-col tw-items-center">
    <img src='assets/dogtor.png' alt='dogtor' width='140px' height='140px' className='tw-rounded-full'/>
    <div className='tw-mt-4'><InputForm {...formDatas[0]} /></div>
    <div>
      <div className='tw-mt-4'><PasswordForm {...formDatas[1]}/></div>
      <div className='tw-mt-4 tw-text-red-500 tw-ml-3'>Quên mật khẩu</div>
    </div>
    
  </div>
}

export default LoginForm
