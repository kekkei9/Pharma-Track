import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'

const HomePage = (props) => {
  const navigate = useNavigate()                                                                                                                                                                                                     

  return <div className="HomePage">
    <div className='tw-text-3xl tw-text-gray-500 tw-underline'>
      This is HomePage
    </div>
  </div>
}

export default HomePage
