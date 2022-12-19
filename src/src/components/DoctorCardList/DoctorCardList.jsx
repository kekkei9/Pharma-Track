import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './DoctorCardList.scss'
import DoctorCard from '../DoctorCard/DoctorCard'
import { List } from 'antd';
import BackNextButton from '../BackNextButton/BackNextButton';
import { Button, notification, Space } from 'antd';
import Fetch from "../../fetch";

const DoctorCardList = (props) => {
  const [DoctorData, setDoctorData] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctor = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/clinic/",
        );
        setDoctorData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctor();

    return () => abortController.abort();
  }, [requestData]);
  
  const [changeStyle, setStyle] = useState(-1)

  const [id_clinic, setID] = useState(-1)

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
    navigate('/bookap/doctor/' + id_clinic)
  }

  const onClickBack = () => {
    navigate('/homepage')
  }

  const onClickNext = () => {
    {id_clinic === -1 ? openNotificationWithIcon() : navigate('/bookap/doctor/' + id_clinic)}
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
                        style = {changeStyle === item.id_clinic ? {'border-color': 'rgba(0, 121, 255, 0.5)'}
                        : {}}
                        changeStyle = {changeStyle}
                        setID = {setID}
                        setStyle = {setStyle}
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
