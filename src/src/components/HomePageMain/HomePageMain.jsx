import React from 'react'
import './HomePageMain.scss'


const HomePageMain = (props) => {
  return <div className="HomePageMain tw-block tw-mt-7">
    <div className = 'tw-flex tw-items-center tw-mx-auto tw-max-w-5xl'>
      <img src='assets/dogtor_white.png' alt='dogtor_white' width='370px' height='370px'></img>
      <div className = 'tw-ml-36'>
        <div className='tw-font-bold tw-text-6xl tw-text-blue-600'> Pharma Track</div>
        <div className= 'tw-font-normal tw-text-5xl tw-text-black tw-text-truncate tw-mt-7'> Giải pháp khám bệnh nhanh chóng cho tất cả mọi người</div>    
      </div>
    </div>
    </div>
}

export default HomePageMain
