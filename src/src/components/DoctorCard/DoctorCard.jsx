import React, {useState} from 'react'
import './DoctorCard.scss'


const DoctorCard = ({ id, img, name, address, field, style, changeStyle, setStyle, handleDoubleClick, index}) => {

  return <div className = 'DoctorCard tw-mt-14 tw-border-2 tw-px-8 tw-pt-10 tw-select-none tw-cursor-pointer tw-transform tw-transition tw-duration-500 hover:tw-scale-110'
    style = {style}
    onClick = {()=> setStyle(index)}
    onDoubleClick = {()=> handleDoubleClick()}
    >
    <div className = 'tw-flex tw-justify-center'>
      <img src = {img} alt = 'dogtor'></img>
    </div>
    <div className = 'tw-text-center tw-my-auto tw-pt-6  '>
      <div className = 'Name tw-text-2xl tw-font-bold tw-pb-3'>{name}</div>
      <div className = 'Địa chỉ tw-text-sm '>Địa chỉ phòng khám: {address}</div>
      <div className = 'field tw-text-sm'>Lĩnh vực: {field}</div>
    </div>
</div>
}

export default DoctorCard
