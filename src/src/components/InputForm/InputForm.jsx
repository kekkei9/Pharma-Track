import React from 'react'
import { Input } from 'antd'
import './InputForm.scss'


const InputForm = ({ title, placeholder }) => {
  return <div className="InputForm">
    <div className='tw-text-base tw-ml-2.5'>{title}</div>
    <Input 
      placeholder={placeholder} 
      style = {{
        borderRadius: '10px',
        padding: '0 10px',
        border: 'solid #D9D9D9',
        width: '400px',
        marginTop: '6px'
      }}
    />
  </div>
}

export default InputForm
