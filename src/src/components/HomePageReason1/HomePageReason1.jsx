import React from 'react'
import './HomePageReason1.scss'


const HomePageReason1 = (props) => {
  return <div className="HomePageReason1 tw-block tw-mb-14">
     <div className = 'tw-flex tw-items-center tw-mx-auto tw-max-w-4xl'>
      <img src='assets/doctor1.png' alt='doctor1' width='300px' height='270px'></img>
      <div className = 'tw-ml-8'>
        <div className='tw-font-bold tw-text-4xl tw-text-black'>Đa dạng phòng khám</div>
        <div className= 'tw-font-medium tw-text-3xl tw-text-black tw-text-truncate tw-mt-7'> Cho tới nay, Pharma Track đã hợp tác với 120 phòng khám trên toàn quốc, trong đó có 70 phòng khám ở TP.HCM</div>    
      </div>
    </div>
  </div>
}

export default HomePageReason1
