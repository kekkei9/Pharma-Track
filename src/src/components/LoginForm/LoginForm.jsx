import React from 'react'
import InputForm from '../InputForm/InputForm'
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
    {formDatas.map((formData) => (
      <div className='tw-mt-4'>
        <InputForm {...formData} />
      </div>
    ))}
  </div>
}

export default LoginForm
