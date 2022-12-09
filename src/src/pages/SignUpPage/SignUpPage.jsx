import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SignUpPage = (props) => {
  const navigate = useNavigate()

  return <div className="SignUpPage tw-flex tw-flex-col tw-items-center">
    <div style={{ width: '400px'}}>
      <div className='back-button tw-flex tw-flex-row tw-items-center'
        onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <div className='tw-ml-2 tw-text-base'>
          Trở lại
        </div>
      </div>
    </div>
    <SignUpForm />
  </div>
}

export default SignUpPage
