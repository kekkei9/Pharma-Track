import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notification, Spin } from "antd";
import {
  checkUserInfoExist,
  getUidByStaffId,
  getUserData,
} from "../../firebase";
import "./StaffProfilePage.scss";
import BackButton from "../../components/BackButton/BackButton";
import Fetch from "../../fetch";

const StaffProfilePage = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [staffInfo, setStaffInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchStaff = async () => {
      try {
        const [userData, staffInf] = await Promise.all([
          getUidByStaffId(params.staffId),
          Fetch(
            "POST",
            "https://pharma-track.onrender.com/api/v1/staff/staffByID",
            {
              id_staff: params.staffId,
            }
          ),
        ]);
        setIsLoading(false);
        setStaffInfo({ ...userData, ...staffInf[0] });
      } catch (e) {
        console.error(e);
      }
    };
    fetchStaff();
    return () => abortController.abort();
  }, [params.staffId, navigate]);

  return (
    <div className="StaffProfilePage">
      <BackButton />
      <Spin tip="Loading..." spinning={isLoading}>
        {!!staffInfo && (
          <div>
            <div>Mã nhân viên: {staffInfo.id_staff}</div>
            <div>Tên nhân viên: {staffInfo.name}</div>
            <div>Số điện thoại: {staffInfo.number}</div>
            <div>Loại nhân viên: {staffInfo.type}</div>
            <div>Khoa: {staffInfo.department}</div>
            <div>Tỉnh/thành phố: {staffInfo.province}</div>
          </div>
        )}
        {!staffInfo && <div>Không tồn tại nhân viên</div>}
      </Spin>
    </div>
  );
};

export default StaffProfilePage;
