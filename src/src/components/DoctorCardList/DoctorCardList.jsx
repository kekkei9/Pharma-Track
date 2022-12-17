import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './DoctorCardList.scss'
import DoctorCard from '../DoctorCard/DoctorCard'
import { List } from 'antd';
import BackNextButton from '../BackNextButton/BackNextButton';
import { Button, notification, Space } from 'antd';


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

  const [id, setID] = useState(-1)


  const openNotificationWithIcon = () => {
    notification.error({
      message: 'Lỗi',
      description:
        'Bạn vẫn chưa chọn bác sĩ',
    });
    notification.config({
      placement: 'topRight',
      top: 100,
    })
  };

  const navigate = useNavigate()

  const handleDoubleClick = () => {
    navigate('/bookap/doctor' + id)
  }

  const onClickBack = () => {
    navigate('/homepage')
  }

  const onClickNext = () => {
    {id === -1 ? openNotificationWithIcon() : navigate('/bookap/doctor' + id)}
  }

  return <div className="DoctorCardList">
    <div className = 'List tw-mx-auto tw-flex-wrap tw-max-w-4xl'>
      <List
        grid={{
          column: 3,  
        }}
        dataSource={DoctorData}
        pagination={{
          pageSize: 6,
        }}
        renderItem={(item) => (
          <List.Item>
            <DoctorCard {...item} 
                        style = {changeStyle === item.id ? {'border-color': 'rgba(0, 121, 255, 0.5)'}
                        : {}}
                        changeStyle = {changeStyle}
                        setStyle = {setStyle}
                        setID = {setID}
                        handleDoubleClick = {() => handleDoubleClick()}
                        />
          </List.Item>
        )}
      />
    </div>

    <BackNextButton onClickBack={ onClickBack } onClickNext = { onClickNext }/>      
</div>
}

export default DoctorCardList
