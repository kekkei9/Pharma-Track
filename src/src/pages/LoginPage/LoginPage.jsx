import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import TestFormContainer from '../../containers/TestForm/TestForm.container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const LoginPage = (props) => {
  const navigate = useNavigate()

  return <div className="LoginPage tw-flex tw-flex-col tw-items-center">
    <div style={{ width: '400px'}}>
      <div className='back-button tw-flex tw-flex-row tw-items-center'
        onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <div className='tw-ml-2 tw-text-base'>
          Trở lại
        </div>
      </div>
    <TestFormContainer/>
    <LoginForm/>
    </div>
  </div>
}

export default LoginPage
