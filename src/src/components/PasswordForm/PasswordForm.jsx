import { Input } from 'antd';
import React from 'react'
import './PasswordForm.scss'


const PasswordForm = ({ title, placeholder }) => {
  return <div className="PasswordForm">
    <div className='tw-text-base tw-ml-3 tw-mb-1.5'>{title}</div>
    <Input.Password
      placeholder={placeholder}
      style = {{
        borderRadius: '10px',
        padding: '7px 12px',
        border: 'solid #D9D9D9',
        display: 'inline-flex',
        width: '400px'
      }}
    />
  </div>
}

export default PasswordForm
