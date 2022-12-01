import React from 'react'
import './Footer.scss'
import Colors from '../../color'
import CustomButton from '../CustomButton/CustomButton'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = (props) => {
    const location = useLocation()
    const navigate = useNavigate()

  return (<div className="Footer tw-mt-6">
    <div className='tw-pl-20 tw-pt-4 tw-pb-4 tw-flex tw-flex-col tw-items-center' style={{backgroundColor: Colors.dark_blue}}>
      {location.pathname === '/home' ? <div className = 'RegBtn tw-px-12 tw-py-2.5 tw-bg-white tw-font-semibold tw-text-xl'
        onClick={() => navigate('/bookap')}>
        Đặt khám ngay!
      </div> : <></>}
      <ul className='tw-self-start'>
        {['Copyright', 'About', 'Contact'].map((prop) => (
          <li className='tw-text-white '>{prop}</li>
        ))}
      </ul>
    </div>
  </div>)
}

export default Footer
