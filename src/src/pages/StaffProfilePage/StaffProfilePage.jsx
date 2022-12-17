import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notification } from "antd";
import { checkUserInfoExist, getUserData } from "../../firebase";
import "./StaffProfilePage.scss";
import BackButton from "../../components/BackButton/BackButton";
import Fetch from "../../fetch";

const StaffProfilePage = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [staffInfo, setStaffInfo] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchStaff = async () => {
      try {
        const isExist = await checkUserInfoExist(params.staffId);
        if (!isExist) {
          notification.error({
            message: "Nhân viên",
            description: "Không thể tìm thấy nhân viên",
          });
          navigate(-1);
          return () => abortController.abort();
        }
        const response = await getUserData(params.staffId);
        setStaffInfo(response);

        //Lay data tu staff
        await Fetch(
          "Post",
          "https://pharma-track.onrender.com/api/v1/staff",
          {}
        );
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
      {!!staffInfo && (
        <div>
          <div>Email: {staffInfo.email}</div>
          {!!staffInfo.province && (
            <div>Tỉnh/thành phố: {staffInfo.province}</div>
          )}
          <div>Tên: {staffInfo.username}</div>
        </div>
      )}
      {!staffInfo && <div>Không tồn tại người dùng</div>}
    </div>
  );
};

export default StaffProfilePage;
