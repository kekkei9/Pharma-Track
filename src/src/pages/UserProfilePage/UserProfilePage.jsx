import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../firebase";
import "./UserProfilePage.scss";

const UserProfilePage = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      setUserData(await getUserData(params.userId));
    };
    fetchUser();

    return () => abortController.abort();
  });

  const RoleName = {
    host: "Chủ phòng khám",
    staff: "Nhân viên",
    user: "Người dùng",
  };

  return (
    <div className="UserProfilePage">
      <div>Tên: {userData.username}</div>
      <div>Tỉnh thành: {userData?.province}</div>
      <div>Email: {userData.email}</div>
      <div>Chức vụ : {RoleName[userData.role]}</div>
      {userData.role !== "user" && <div>Tại phòng khám</div>}
      <div>Số điện thoại</div>
    </div>
  );
};

export default UserProfilePage;
