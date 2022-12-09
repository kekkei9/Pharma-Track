import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'
import HomePageMain from '../../components/HomePageMain/HomePageMain'
import HomePageReason from '../../components/HomePageReason/HomePageReason'


const HomePage = (props) => {
  const navigate = useNavigate()

  return <div className="HomePage tw-flex tw-flex-col tw-items-center">
    <HomePageMain/>
    <HomePageReason/>
    <div className = 'RegBtn tw-px-12 tw-py-2.5 tw-bg-white tw-font-semibold tw-text-xl'
        onClick={() => navigate('/bookap')}>
        Đặt khám ngay!
    </div>
  </div>
}

export default HomePage
