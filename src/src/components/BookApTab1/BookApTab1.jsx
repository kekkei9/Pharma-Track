import React, { useState, useEffect } from "react";
import "./BookApTab1.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PickerForm from "../PickerForm/PickerForm";
import DoctorCardList from "../DoctorCardList/DoctorCardList";
import GoogleMapContain from "../GoogleMapContain/GoogleMapContain";
import Fetch from "../../fetch";
import { Form, Formik } from "formik";
import AddressPickForm from "../AddressPickForm/AddressPickForm";
import { Modal, notification, Spin } from "antd";
import OpenDoctorCard from "../OpenDoctorCard/OpenDoctorCard";
import { useNavigate } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";
import { doc } from "firebase/firestore";

const BookApTab1 = (props) => {
  const navigate = useNavigate();
  const [InitDoctorData, setInitDoctorData] = useState([]);
  const [DoctorData, setDoctorData] = useState([]);
  const [currentDoctor, setCurrentDoctor] = useState([]);
  const [id_staff, setID] = useState(-1);
  const [time, setTime] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [addressValues, setAddressValues] = useState({
    province: "",
    city: "",
    ward: "",
  });

  useEffect(() => {
    const abortController = new AbortController();

    if (!!localStorage.getItem("bookingState")) {
      navigate("/bookap3");
    }

    setIsLoading(true);
    const fetchDoctor = async () => {
      try {
        const [responseClinic, responseStaff] = await Promise.all([
          Fetch("GET", "https://pharma-track.onrender.com/api/v1/clinic/"),
          Fetch("GET", "https://pharma-track.onrender.com/api/v1/staff"),
        ]);
        const filteredDoctorList = responseStaff.filter((item) => {
          return item.type === "Bác sĩ";
        });
        setInitDoctorData(
          filteredDoctorList.map((doctor) => ({
            ...doctor,
            ...responseClinic.find((x) => x.id_clinic === doctor.id_clinic),
          }))
        );
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctor();

    return () => abortController.abort();
  }, [navigate]);

  useEffect(() => {
    setDoctorData(InitDoctorData);
  }, [InitDoctorData]);

  const openNotificationTime = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn vẫn chưa chọn Giờ",
    });
  };

  const openNotificationWithIcon = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn vẫn chưa chọn bác sĩ",
    });
  };

  const handleDoubleClick = () => {
    setCurrentDoctor(
      DoctorData.find((item) => {
        return item.id_staff === id_staff;
      })
    );
    showModal();
  };

  const handleDoubleClickMap = () => {
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (time === -1) {
      openNotificationTime();
      return false;
    } else {
      setDoctorData(InitDoctorData);
      setIsModalOpen(false);
      navigate("/bookap2", {
        state: {
          currentDoctor,
          time,
        },
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickBack = () => {
    navigate("/homepage");
  };

  const onClickNext = () => {
    if (id_staff === -1) {
      openNotificationWithIcon();
      return false;
    } else {
      setCurrentDoctor(
        DoctorData.find((item) => {
          return item.id_staff === id_staff;
        })
      );
      showModal();
    }
  };

  useEffect(() => {
    if (addressValues?.ward) {
      setDoctorData(
        InitDoctorData.filter((x) => x.ward === addressValues.ward)
      );
    } else if (addressValues?.city) {
      setDoctorData(
        InitDoctorData.filter((x) => x.city === addressValues.city)
      );
    } else if (addressValues?.province) {
      setDoctorData(
        InitDoctorData.filter((x) => x.province === addressValues.province)
      );
    }
  }, [JSON.stringify(addressValues)]);

  const formDatas = [
    {
      title: "",
      placeholder: "Tên Tỉnh",
      items: "",
    },
    {
      title: "",
      placeholder: "Tên Quận/Huyện",
      items: "",
    },
    {
      title: "",
      placeholder: "Tên Loại Bệnh",
      items: "",
    },
  ];

  return (
    <div className="BookApTab1">
      <Tabs className="Tabs">
        <TabList className="Option tw-flex tw-max-w-3xl tw-mx-auto tw-mt-10 tw-text-lg tw-cursor-pointer tw-select-none">
          <Tab className="Option_1 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
            Chọn phòng khám theo bác sĩ
          </Tab>
          <Tab className="Option_2 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
            Chọn phòng khám theo vị trí
          </Tab>
        </TabList>
        <Spin spinning={isLoading} tip={"Loading..."}>
          <TabPanel>
            <div className="tw-flex tw-flex-col tw-items-center tw-mt-5">
              <Formik initialValues={addressValues}>
                {(props) => (
                  <Form>
                    <AddressPickForm
                      addressValues={addressValues}
                      setAddressValues={setAddressValues}
                      {...props}
                    />
                  </Form>
                )}
              </Formik>
            </div>

            <DoctorCardList
              DoctorData={DoctorData}
              handleDoubleClick={handleDoubleClick}
              id_staff={id_staff}
              setID={setID}
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
          </TabPanel>
          <TabPanel>
            <div className="tw-max-w-4xl tw-mx-auto tw-px-40 tw-mt-10">
              <div className="tw-flex tw-items-center tw-justify-between ">
                <div className="tw-text-lg"> Chọn Loại Bệnh </div>
                <PickerForm {...formDatas[2]} style={{ width: "300px" }} />
              </div>
            </div>
            <div className="tw-mt-10">
              <GoogleMapContain
                DoctorData={DoctorData}
                handleDoubleClickMap={handleDoubleClickMap}
                currentDoctor={currentDoctor}
                setCurrentDoctor={setCurrentDoctor}
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
            </div>
          </TabPanel>
        </Spin>
      </Tabs>
      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab1;
