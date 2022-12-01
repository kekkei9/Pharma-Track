import React from 'react'
import './TestCardList.scss'
import TestCard from '../TestCard/TestCard'


const TestCardList = ({doctorList}) => {
  console.log(doctorList)
  return (<div className="TestCardList tw-flex tw-flex-row">
    {doctorList.map((doctor, index) => (
      <TestCard 
      key = {index}/>
    ))}
  </div>)
}

export default TestCardList
