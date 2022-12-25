import React, { useState } from "react";
import "./DoctorCardList.scss";
import DoctorCard from "../DoctorCard/DoctorCard";
import { List } from "antd";
import { Modal, notification } from "antd";
import OpenDoctorCard from "../OpenDoctorCard/OpenDoctorCard";
import { useNavigate } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";

const DoctorCardList = ({ DoctorData }) => {
  const [id_staff, setID] = useState(-1);

  const navigate = useNavigate();

  const openNotificationWithIcon = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn vẫn chưa chọn bác sĩ",
    });
  };

  const openNotificationTime = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn vẫn chưa chọn Giờ",
    });
  };

  const currentDoctor = DoctorData.find((item) => {
    return item.id_staff === id_staff;
  });

  const [changeStyle, setStyle] = useState(-1);

  const [time, setTime] = useState(-1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (time === -1) {
      openNotificationTime();
      return false;
    } else {
      setIsModalOpen(false);
      navigate("/bookap2", { state: {
        currentDoctor : currentDoctor,
        time : time,
      } });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onClickBack = () => {
    navigate("/homepage");
  };

  const onClickNext = () => {
    {
      id_staff === -1 ? openNotificationWithIcon() : showModal();
    }
  };

  return (
    <div className="DoctorCardList">
      <div className="List tw-mx-auto tw-flex-wrap tw-max-w-4xl">
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
              <DoctorCard
                {...item}
                style={
                  changeStyle === item.id_staff
                    ? { "border-color": "rgba(0, 121, 255, 0.5)" }
                    : {}
                }
                changeStyle={changeStyle}
                setID={setID}
                setStyle={setStyle}
                handleDoubleClick={showModal}
              />
              <Modal
                title="CHI TIẾT BÁC SĨ"
                open={isModalOpen}
                okType={"primary"}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
              >
                <OpenDoctorCard
                  currentDoctor={currentDoctor}
                  time={time}
                  setTime={setTime}
                />
              </Modal>
            </List.Item>
          )}
        />
      </div>
      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default DoctorCardList;
