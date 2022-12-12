import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './DoctorCardList.scss'
import DoctorCard from '../DoctorCard/DoctorCard'
import { List } from 'antd';


const DoctorCardList = (props) => {
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

  const [changeStyle, setStyle] = useState(-1)

  const navigate = useNavigate()

  const handleDoubleClick = (props) => {
    navigate('/bookap/doctor' + props.id)
  }

  return <div className="DoctorCardList tw-mx-auto tw-flex tw-flex-wrap tw-justify-between tw-max-w-4xl">
    <List
      grid={{
        gutter: 16,
        column: 3,
      }}
      dataSource={DoctorData}
      pagination={{
        pageSize: 6,
      }}
      renderItem={(item,index) => (
        <List.Item>
           <DoctorCard {...item} 
                      style = {changeStyle === index ? {'border-color': 'rgba(0, 121, 255, 0.5)'}
                      : {}}
                      changeStyle = {changeStyle}
                      setStyle = {setStyle}
                      index = {index}
                      handleDoubleClick = {() => handleDoubleClick(item)}
                      />
        </List.Item>
      )}
    />

</div>
}

export default DoctorCardList
