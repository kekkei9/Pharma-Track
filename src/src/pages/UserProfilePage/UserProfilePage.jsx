import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./UserProfilePage.scss";

const UserProfilePage = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authentication);

  const RoleName = {
    host: "Chủ phòng khám",
    staff: "Nhân viên",
    user: "Người dùng",
  };

  return (
    <div className="UserProfilePage">
      <div>Tên: {user.username}</div>
      <div>Tỉnh thành: {user?.province}</div>
      <div>Email: {user.email}</div>
      <div>Chức vụ : {RoleName[user.role]}</div>
      {user.role !== "user" && <div>Tại phòng khám</div>}
      <div>Số điện thoại</div>
    </div>
  );
};

export default UserProfilePage;
