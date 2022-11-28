import React from 'react'
import './DoctorCard.scss'


const DoctorCard = ({ img, name, address, field, experience }) => {
  return <div className = 'Card tw-max-w-xs tw-mt-14 tw-select-none tw-cursor-pointer tw-transform tw-transition tw-duration-500 hover:tw-scale-110'>
    <div className = 'wrapper tw-border-2 tw-px-16 '>
      <div className = 'tw-flex tw-justify-center tw-mt-11'>
        <img src = {img} alt = 'dogtor'></img>
      </div>
      <div className = 'tw-text-center tw-mt-5 tw-mb-11'>
        <div className = 'Name tw-text-2xl tw-font-bold'>{name}</div>
        <div className = 'Địa chỉ tw-text-sm'>Địa chỉ phòng khám: {address}</div>
        <div className = 'field tw-text-sm'>Lĩnh vực: {field}</div>
        <div className = 'experience tw-text-sm'>Số năm kinh nghiệm: {experience}</div>
      </div>
    </div>
</div>
}

export default DoctorCard
