import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'
import HomePageMain from '../../components/HomePageMain/HomePageMain'
import HomePageReason from '../../components/HomePageReason/HomePageReason'


const HomePage = (props) => {
  return <div className="HomePage">
    <HomePageMain/>
    <HomePageReason/>
  </div>
}

export default HomePage
