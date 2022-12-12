import React, { useState } from 'react'
import './OpenDoctorCard.scss'
import { Navigate, useParams } from 'react-router-dom'
import { Card } from 'antd';
import InputForm from '../InputForm/InputForm'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import GoogleMapInstance from '../GoogleMapInstance/GoogleMapInstance';


const OpenDoctorCard = (props) => {
  const DoctorData = [
    {
    'id' : '0',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
    'field' : 'nội',
    },
    {
    'id' : '1',
    'img' : '/assets/avatardoctor.png', 
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '2',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn C',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '3',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn D',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '4',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn E',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '5',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn F',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '6',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 1',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
      'field' : 'nội',
      },
      {
        'id' : '7',
      'img' : '/assets/avatardoctor.png', 
      'name' : 'Nguyễn Văn 2',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '8',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 3',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '9',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 4',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '10',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 5',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
      'id' : '11',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 6',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
  ]


  const navigate = useNavigate()

  const { doctorID } = useParams()   

  var currentDoctor = DoctorData[doctorID]

  return <div className="OpenDoctorCard">
    <div className = 'tw-flex tw-justify-center'>
      <Card
        style={{
          width: 700,
          'border-radius': '40px',
          'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className = 'tw-flex tw-items-center'>
          <div className = ''>
            <img src = {currentDoctor.img} alt = 'dogtor' width = '300px' height = '300px'></img>
          </div>
          <div className = 'tw-px-10 tw-flex tw-flex-col'>
            <div className = 'Name tw-text-2xl tw-font-bold tw-pb-3 tw-text-center'>{currentDoctor.name}</div>
            <div className = 'Địa chỉ tw-text-sm '>Địa chỉ phòng khám: {currentDoctor.address}</div>
            <div className = 'field tw-text-sm'>Lĩnh vực: {currentDoctor.field}</div>
            <div className = 'workat tw-text-sm'>Đang làm việc tại: </div>
            <div className = 'position tw-text-sm'>Chức vụ: </div>
            <div className = 'experiences tw-text-sm'>Kinh nghiệm: </div>
            <div className = 'degree tw-text-sm'>Bằng cấp: </div>
          </div>
        </div>
        <div>
          <div className = 'description tw-text-2xl tw-font-bold tw-mt-10 tw-px-5'>Mô tả phòng khám</div>
          <div className = 'inputform tw-px-2  '>
            <InputForm placeholder = 'Mô tả về phòng khám' 
              style ={{width : '500px'}}>
            </InputForm> 
          </div>
        </div>
        <div className = 'tw-mt-10 tw-text-center'>
          <div className = 'phone tw-text-3xl tw-font-bold'>Liên hệ tôi tại </div>
         
        </div>
        <div className = 'tw-flex tw-justify-center tw-mt-10'>
          <Button size = 'large'
              style ={{
                backgroundColor: 'rgba(0, 103, 169, 0.7)',
                color: 'white',
                width: '120px',
                height: '50px'
              }}
              onClick={() => {
                navigate(-1)
              }}
            >
            Quay lại
            </Button>
        </div>

      </Card>
    </div>
  </div>
}

export default OpenDoctorCard
