import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Fetch from "../../fetch";
import "./ClinicProfile.scss";

const ClinicProfile = (props) => {
  const navigate = useNavigate();
  const [clinic, setClinic] = useState({});
  const { user } = useSelector((state) => state.authentication);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/clinic/id_clinic",
          {
            id_clinic: user.id_clinic,
          }
        );
        if (response.result !== "that bai") {
          setClinic(response[0]);
          return true;
        }
      } catch (e) {
        console.error(e);
      }
      notification.error({
        message: "Thông tin phòng khám",
        description: "Không tìm thấy phòng khám",
      });
      navigate(-1);
      return false;
    };
    fetchData();

    return () => abortController.abort();
  });

  return (
    <div className="ClinicProfile center-screen">
      <div>Thông tin phòng khám</div>
      <div>ID phòng khám: {clinic.id_clinic}</div>
      <div>Tên phòng khám: {clinic.name_clinic}</div>
      <div>Tên chủ phòng khám: {clinic.name_doctor}</div>
      <div>
        Địa chỉ: {clinic.address}, {clinic.ward}, {clinic.city},{" "}
        {clinic.province}
      </div>
      <div>Danh sách bác sĩ</div>
    </div>
  );
};

export default ClinicProfile;
