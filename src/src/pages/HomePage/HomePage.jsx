import React from 'react'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

import { useNavigate } from 'react-router-dom'
import './HomePage.scss'
import HomePageMain from '../../components/HomePageMain/HomePageMain'
import HomePageDraw from '../../components/HomePageDraw/HomePageDraw'
import HomePageReason from '../../components/HomePageReason/HomePageReason'
import HomePageReason1 from '../../components/HomePageReason1/HomePageReason1'
import HomePageReason2 from '../../components/HomePageReason2/HomePageReason2'
import HomePageReason3 from '../../components/HomePageReason3/HomePageReason3'

const HomePage = (props) => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return <div className="HomePage">
    <div data-aos = "fade-in" data-aos-easing="ease-in-out" data-aos-once="true">
    <HomePageMain/>
    <HomePageDraw/>
    <HomePageReason/>
    </div>
    <div data-aos = "fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
      <HomePageReason1/>
      <HomePageDraw/>
    </div>
    <div data-aos = "fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
      <HomePageReason2/>
      <HomePageDraw/>
    </div>
    <div data-aos = "fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
      <HomePageReason3/>
    </div>
  </div>
}

export default HomePage
