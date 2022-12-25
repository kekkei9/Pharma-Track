import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notification, Spin, Button, Divider, Typography } from "antd";
import {
  checkUserInfoExist,
  getUidByStaffId,
  getUserData,
} from "../../firebase";
import "./StaffProfilePage.scss";
import BackButton from "../../components/BackButton/BackButton";
import Fetch from "../../fetch";

const StaffProfilePage = ({ staffId }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [staffInfo, setStaffInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchStaff = async () => {
      try {
        const [userData, staffInf] = await Promise.all([
          getUidByStaffId(staffId),
          Fetch(
            "POST",
            "https://pharma-track.onrender.com/api/v1/staff/staffByID",
            {
              id_staff: staffId,
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
  }, [staffId, navigate]);

  return (
    <div className="StaffProfilePage tw-flex tw-flex-col tw-items-center">
      <Spin tip="Loading..." spinning={isLoading}>
        <div className="StaffCardContainer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/dogtor.png`}
            alt="dogtor"
            style={{
              borderRadius: "9999px",
              border: "solid 4px #e1e1e1",
              width: "170px",
              marginBottom: "16px",
            }}
          />
          <Typography.Title level={2} style={{ margin: 0 }}>
            {staffInfo.name}
          </Typography.Title>
          <Typography.Title
            level={5}
            italic
            style={{ margin: 0, marginTop: "8px", color: "rgb(6 182 212)" }}
          >
            {staffInfo.type}
          </Typography.Title>
          <Typography.Title level={5} italic style={{ margin: "8px 0" }}>
            Mã nhân viên: {staffInfo?.id_staff?.substring(0, 8).concat("...")}
          </Typography.Title>
          <Button
            type="default"
            onClick={() => navigator.clipboard.writeText(staffInfo.id_staff)}
            className="tw-mt-4"
          >
            Sao chép ID
          </Button>

          <Divider />

          <Typography.Title level={5} style={{ margin: 0 }}>
            Số điện thoại: {staffInfo.number}
          </Typography.Title>
          <Typography.Title level={5} style={{ margin: "8px 0" }}>
            Khoa: {staffInfo.department}
          </Typography.Title>
          <Typography.Title level={5} style={{ margin: 0 }}>
            Tỉnh/thành phố: {staffInfo.province}
          </Typography.Title>
        </div>
      </Spin>
    </div>
  );
};

export default StaffProfilePage;
