import React from 'react'
import './HomePageReason.scss'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"


const HomePageReason = (props) => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  return <div>
    <div data-aos = "fade-in" data-aos-easing="ease-in-out" data-aos-once="true" className='HomePageReason tw-flex tw-font-bold tw-text-4xl tw-mt-16 tw-mb-24 tw-text-black tw-justify-center'
      >Lý do bạn nên dùng Pharma Track</div>

    <div data-aos = "fade-right" data-aos-easing="ease-in-out" data-aos-once="true" className="HomePageReason1 tw-block tw-mb-14">
      <div className = 'tw-flex tw-items-center tw-mx-auto tw-max-w-4xl'>
        <img src='assets/doctor1.png' alt='doctor1' width='300px' height='270px'></img>
        <div className = 'tw-ml-8'>
          <div className='tw-font-bold tw-text-4xl tw-text-black'>Đa dạng phòng khám</div>
          <div className= 'tw-font-medium tw-text-3xl tw-text-black tw-text-truncate tw-mt-7'> Cho tới nay, Pharma Track đã hợp tác với 120 phòng khám trên toàn quốc, trong đó có 70 phòng khám ở TP.HCM</div>    
        </div>
      </div>
      <div className="HomePageDraw tw-flex tw-mx-auto tw-max-w-5xl tw-h-1 tw-bg-gray-200 tw-border-0"></div>
    </div>

    <div data-aos = "fade-left" data-aos-easing="ease-in-out" data-aos-once="true" className="HomePageReason2 tw-flex tw-mx-auto tw-max-w-4xl tw-my-16">
      <div className = 'tw-block tw-mr-10 tw-ml-40  '>
        <div className='tw-font-bold tw-text-4xl tw-text-black'>Đặt lịch khám ngay lập tức</div>
        <div className= 'tw-font-medium tw-text-3xl tw-text-black tw-text-truncate tw-mt-7'> Không cần thủ tục xác minh hay đăng nhập, với Pharma Track bạn có thể đặt lịch khám chỉ với 3 bước</div>    
      </div>
      <div className = 'tw-items-center tw-mx-auto tw-max-w-4xl'>
        <img src='assets/doctor2.png' alt='doctor2' width='300px' height='300px'></img>
    </div>
    <div className="HomePageDraw tw-flex tw-mx-auto tw-max-w-5xl tw-h-1 tw-bg-gray-200 tw-border-0"></div>
    </div>
    <div className="HomePageDraw tw-flex tw-mx-auto tw-max-w-5xl tw-h-1 tw-bg-gray-200 tw-border-0"></div>

    <div data-aos = "fade-right" data-aos-easing="ease-in-out" data-aos-once="true" className="HomePageReason3 tw-block tw-mt-16 tw-mb-20">
     <div className = 'tw-flex tw-items-center tw-mx-auto tw-pl-14 tw-max-w-4xl'>
      <img src='assets/doctor3.png' alt='doctor3' width='150px' height='150px'></img>
      <div className = 'tw-ml-24'>
        <div className='tw-font-bold tw-text-4xl tw-text-black'>Tìm phòng khám gần nhất</div>
        <div className= 'tw-font-medium tw-text-3xl tw-text-black tw-text-truncate tw-mt-7'>Sử dụng google maps API cùng với dữ liệu được cung cấp từ phòng khám, Pharma Track sẽ giúp bạn tìm ra phòng khám gần nhất</div>    
      </div>
    </div>
    </div>
  </div>
}

export default HomePageReason
