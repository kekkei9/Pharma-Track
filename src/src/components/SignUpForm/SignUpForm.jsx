import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import InputForm from '../InputForm/InputForm'
import PasswordForm from '../PasswordForm/PasswordForm'
import PickerForm from '../PickerForm/PickerForm'
import './SignUpForm.scss'

const components = {
  'InputForm': InputForm,
  'PasswordForm': PasswordForm,
  'PickerForm': PickerForm
}

const FlexComponent = (props) => {
    const Component = components[props.type]
    return <div className='tw-mt-4'>
      <Component {...props} />
    </div>
}

const SignUpForm = (props) => {
  const [provinces, setProvinces] = useState([])

  const formDatas = [
    {
      'title': 'Tài khoản',
      'placeholder': 'Tên tài khoản, vd: NguyenVanA',
      'type': 'InputForm'
    },
    {
      'title': 'Mật khẩu',
      'placeholder': 'Mật khẩu, vd: 123456789',
      'type': 'PasswordForm'
    },
    {
      'title': 'Nhập lại mật khẩu',
      'placeholder': 'Nhập lại mật khẩu',
      'type': 'PasswordForm'
    },
    {
      'title': 'Email xác thực',
      'placeholder': 'Email xác thực, vd: 12345@gmail.com',
      'type': 'InputForm'
    },
    {
      'title': 'Tỉnh/ thành phố',
      'placeholder': 'Tỉnh/ thành phố đang sinh sống',
      'type': 'PickerForm',
      'items': provinces
    }
  ]

  useEffect(() => {
    fetch('data/vn.json')
    .then((response) => response.json())
    .then((data) => {
      var provArray = data.map((d) => d.admin_name)

      provArray = provArray.filter((value, index, self) => self.indexOf(value) === index)

      setProvinces(provArray.map((prov) => { return {'label': prov, 'value': prov}}))
  })
  }, [])

  return <div className="SignUpForm tw-flex tw-flex-col tw-items-center">
    <img src='assets/dogtor.png' alt='dogtor' width='140px' height='140px' className='tw-rounded-full'/>
    {formDatas.map((formData) => FlexComponent(formData) )}
    <Button className='primary-btn tw-mt-4' 
            style={{
              width: '400px',
              backgroundColor: '#0067A9',
              fontWeight: 600
            }}>
        Đăng kí
    </Button>
    <div className='tw-mt-4'>Hoặc đăng nhập với</div>
    <div className='provider-container tw-flex tw-flex-row tw-mt-4'>
            <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
                alt='google icon'
                style={{
                  width: '35px',
                  height: '35px',
                  border: '9999px',
               }}
            />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png'
                alt='google icon'
                style={{
                  width: '35px',
                  height: '35px',
                  border: '9999px',
                  marginLeft: '16px'
               }}
            />
    </div>
    
  </div>
}

export default SignUpForm
