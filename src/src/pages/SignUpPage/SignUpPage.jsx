import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.scss'

const SignUpPage = (props) => {
  const navigate = useNavigate()

  return <div className="SignUpPage">
    <SignUpForm />
  </div>
}

export default SignUpPage
