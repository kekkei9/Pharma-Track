import React from 'react'
import './Footer.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = (props) => {
    const location = useLocation()
    const navigate = useNavigate()

  return (<div className="Footer tw-mt-6">
    <div className='tw-pl-20 tw-pt-4 tw-pb-4 tw-pr-20 tw-flex tw-flex-col tw-items-center' style={{backgroundColor: '#0067A9'}}>
      {location.pathname === '/home' || location.pathname === '/' ? <div className = 'RegBtn tw-px-12 tw-py-2.5 tw-bg-white tw-font-semibold tw-text-xl'
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
