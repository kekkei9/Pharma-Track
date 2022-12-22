import React, {useState} from 'react'
import './DoctorCard.scss'


const DoctorCard = ({ id_clinic, name_doctor, address, field, style, changeStyle, setStyle, handleDoubleClick, setID}) => {

  return <div className = 'DoctorCard tw-border-2 tw-px-8 tw-pt-10 tw-select-none tw-cursor-pointer tw-transform tw-transition tw-duration-500 hover:tw-scale-110'
    style = {style}
    onClick = {()=> {
      setID(id_clinic)
      setStyle(id_clinic)}}
    onDoubleClick = {()=> {
      handleDoubleClick()
      setID(id_clinic)}}
    >
    <div className = 'tw-flex tw-justify-center'>
      <img src = '/assets/avatardoctor.png' alt = 'dogtor'></img>
    </div>
    <div className = 'tw-text-center tw-my-auto tw-pt-2 '>
      <div className = 'Name tw-text-2xl tw-font-bold tw-pb-2'>{name_doctor}</div>
      <div className = 'Địa chỉ tw-text-sm '>Địa chỉ phòng khám: {address}</div>
      <div className = 'field tw-text-sm'>Khoa: {field}</div>
    </div>
</div>
}

export default DoctorCard
