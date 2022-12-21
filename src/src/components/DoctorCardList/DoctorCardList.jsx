import React, {useState} from 'react'
import './DoctorCardList.scss'
import DoctorCard from '../DoctorCard/DoctorCard'
import { List } from 'antd';
import { Modal } from 'antd';
import OpenDoctorCard from '../OpenDoctorCard/OpenDoctorCard';

const DoctorCardList = ({ DoctorData, id_clinic, setID }) => {

  const [changeStyle, setStyle] = useState(-1)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const currentDoctor = DoctorData.find(item => {
    return item.id_clinic === id_clinic
  })

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
                        handleDoubleClick = {showModal}
                        />
          <Modal title="CHI TIẾT BÁC SĨ" open={isModalOpen} okType = {'primary'} onOk={handleOk} onCancel={handleCancel} width = {1000} footer = {null}>
            <OpenDoctorCard currentDoctor={currentDoctor}/>
          </Modal>
          </List.Item>
        )}
      />
    </div>
</div>
}

export default DoctorCardList
