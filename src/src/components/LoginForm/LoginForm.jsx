import React from 'react'
import InputForm from '../InputForm/InputForm'
import PasswordForm from '../PasswordForm/PasswordForm'
import { Button } from 'antd'
import './LoginForm.scss'

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

const LoginForm = (props) => {


  return <div className="LoginForm tw-flex tw-flex-col tw-items-center">
    <img src='assets/dogtor.png' alt='dogtor' width='140px' height='140px' className='tw-rounded-full'/>
    <div className='tw-mt-4'><InputForm {...formDatas[0]} /></div>
    <div>
      <div className='tw-mt-4'><PasswordForm {...formDatas[1]}/></div>
      <div className='tw-mt-4 tw-text-red-500 tw-ml-3'>Quên mật khẩu</div>
    </div>
    <Button className='primary-btn tw-mt-4' 
            style={{
              width: '400px',
              backgroundColor: '#0067A9',
              fontWeight: 600
            }}>
        Đăng nhập
    </Button>
    <div className='tw-mt-4'>Đăng kí tài khoản, nếu bạn chưa đăng kí!</div>
    <Button className='default-btn tw-mt-4' style={{width: '400px'}}>Đăng kí tài khoản</Button>
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

export default LoginForm
