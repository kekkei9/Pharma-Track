import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'
import HomePageMain from '../../components/HomePageMain/HomePageMain'
import HomePageDraw from '../../components/HomePageDraw/HomePageDraw'
import HomePageReason from '../../components/HomePageReason/HomePageReason'
import HomePageReason1 from '../../components/HomePageReason1/HomePageReason1'
import HomePageReason2 from '../../components/HomePageReason2/HomePageReason2'
import HomePageReason3 from '../../components/HomePageReason3/HomePageReason3'

const HomePage = (props) => {
  const navigate = useNavigate()                                                                                                                                                                                                     

  return <div className="HomePage">
    <div className=''>
      <HomePageMain/>
      <HomePageDraw/>
      <HomePageReason/>
      <HomePageReason1/>
      <HomePageDraw/>
      <HomePageReason2/>
      <HomePageDraw/>
      <HomePageReason3/>
    </div>
  </div>
}

export default HomePage
