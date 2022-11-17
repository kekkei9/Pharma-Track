import React from 'react'
import './HomePageReason3.scss'


const HomePageReason3 = (props) => {
  return <div className="HomePageReason3 tw-block tw-mt-16 tw-mb-20">
     <div className = 'tw-flex tw-items-center tw-mx-auto tw-pl-14 tw-max-w-4xl'>
      <img src='assets/doctor3.png' alt='doctor3' width='150px' height='150px'></img>
      <div className = 'tw-ml-24'>
        <div className='tw-font-bold tw-text-4xl tw-text-black'>Tìm phòng khám gần nhất</div>
        <div className= 'tw-font-medium tw-text-3xl tw-text-black tw-text-truncate tw-mt-7'>Sử dụng google maps API cùng với dữ liệu được cung cấp từ phòng khám, Pharma Track sẽ giúp bạn tìm ra phòng khám gần nhất</div>    
      </div>
    </div>
  </div>}

export default HomePageReason3
