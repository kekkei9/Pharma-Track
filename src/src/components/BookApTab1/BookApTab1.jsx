import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookApTab1.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PickerForm from "../PickerForm/PickerForm";
import DoctorCardList from "../DoctorCardList/DoctorCardList";
import GoogleMapContain from "../GoogleMapContain/GoogleMapContain";
import Fetch from "../../fetch";
import BackNextButton from "../BackNextButton/BackNextButton";
import { notification } from "antd";
import { Form, Formik } from "formik";
import AddressPickForm from "../AddressPickForm/AddressPickForm";

const BookApTab1 = (props) => {
  const navigate = useNavigate();
  const [id_clinic, setID] = useState(-1);
  const [addressValues, setAddressValues] = useState({
    province: "",
    city: "",
    ward: "",
  });
  const [DoctorData, setDoctorData] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctor = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/clinic/"
        );
        setDoctorData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctor();

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    console.log(addressValues);
    //fetch doctor by province, city, ward
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

  const openNotificationWithIcon = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn vẫn chưa chọn bác sĩ",
    });
  };

  const onClickBack = () => {
    navigate("/homepage");
  };

  const onClickNext = () => {
    {
      id_clinic === -1 ? openNotificationWithIcon() : navigate("/bookap2");
    }
  };

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
        <TabPanel>
          <div className="tw-flex tw-flex-col tw-items-center">
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
            id_clinic={id_clinic}
            setID={setID}
          />
        </TabPanel>
        <TabPanel>
          <div className="tw-max-w-4xl tw-mx-auto tw-px-40 tw-mt-10">
            <div className="tw-flex tw-items-center tw-justify-between ">
              <div className="tw-text-lg"> Chọn Loại Bệnh </div>
              <PickerForm {...formDatas[2]} style={{ width: "300px" }} />
            </div>
          </div>
          <div className="tw-mt-10">
            <GoogleMapContain DoctorData={DoctorData} />
          </div>
        </TabPanel>
      </Tabs>
      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab1;
