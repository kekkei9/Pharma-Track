import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = (props) => {
  const navigate = useNavigate()

  return <div className="LoginPage">
    <LoginForm/>
  </div>
}

export default LoginPage
