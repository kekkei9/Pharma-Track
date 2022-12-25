import React, { useState, useEffect } from "react";
import "./BookApTab1.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PickerForm from "../PickerForm/PickerForm";
import DoctorCardList from "../DoctorCardList/DoctorCardList";
import GoogleMapContain from "../GoogleMapContain/GoogleMapContain";
import Fetch from "../../fetch";
import { Form, Formik } from "formik";
import AddressPickForm from "../AddressPickForm/AddressPickForm";

const BookApTab1 = (props) => {
  const [addressValues, setAddressValues] = useState({
    province: "",
    city: "",
    ward: "",
  });

  const [InitDoctorData, setInitDoctorData] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctor = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/clinic/"
        );
        setInitDoctorData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctor();

    return () => abortController.abort();
  }, []);

  const [StaffData, setStaffData] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchStaff = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/staff"
        );
        setStaffData(
          response.filter((item) => {
            return item.type === "Bác sĩ";
          })
        );
      } catch (e) {
        console.error(e);
      }
    };
    fetchStaff();

    return () => abortController.abort();
  }, []);

  const [DoctorData, setDoctorData] = useState([]);

  useEffect(() => {
    InitDoctorData.map((itemDoctor) => {
      StaffData.map((itemStaff) => {
        if (itemStaff.id_clinic === itemDoctor.id_clinic) {
          Object.assign(itemStaff, {
            province: itemDoctor.province,
            city: itemDoctor.city,
            ward: itemDoctor.ward,
            address: itemDoctor.address,
            lat: itemDoctor.lat,
            lng: itemDoctor.lng,
            name_clinic: itemDoctor.name_clinic,
            status_clinic: itemDoctor.status_clinic,
          });
        }
      });
    });
    setDoctorData(StaffData);
    console.log(DoctorData);
  }, []);

  const [myProvince, setMyProvince] = useState([]);
  useEffect(() => {
    console.log(addressValues)
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

          <DoctorCardList DoctorData={DoctorData} />
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
    </div>
  );
};

export default BookApTab1;
