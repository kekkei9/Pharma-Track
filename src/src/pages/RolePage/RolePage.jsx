import React from 'react'
import { useNavigate } from 'react-router-dom'
import TestCardList from '../../components/TestCardList/TestCardList'
import './RolePage.scss'

const RolePage = (props) => {
  const navigate = useNavigate()

  const doctorList = [0, 0, 0, 0, 0];

  return (<div className="RolePage tw-mt-10 tw-ml-10">
    <TestCardList doctorList = {doctorList}/>
  </div>)  
}

export default RolePage
