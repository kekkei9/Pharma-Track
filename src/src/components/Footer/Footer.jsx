import React from 'react'
import './Footer.scss'
import Colors from '../../color'
import CustomButton from '../CustomButton/CustomButton'

const Footer = (props) => {
  

  return (<div className="Footer">
    <div className='tw-pl-20 tw-pt-4 tw-pb-4 tw-flex tw-flex-col tw-items-center' style={{backgroundColor: Colors.dark_blue}}>
      <div className = 'RegBtn tw-px-12 tw-py-2.5 tw-bg-white tw-font-semibold tw-text-xl'>
        Đặt khám ngay!
      </div>
      <ul className='tw-self-start'>
        {['Copyright', 'About', 'Contact'].map((prop) => (
          <li className='tw-text-white '>{prop}</li>
        ))}
      </ul>
    </div>
  </div>)
}

export default Footer
