import React from "react";
import "./Header.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authentication/authentication.slice";
import { signOutUser } from "../../firebase";
import { Descriptions, Dropdown, notification } from "antd";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthUser } = useSelector((state) => state.authentication);

  console.log(user, isAuthUser);

  const logOutHandler = async () => {
    await signOutUser();
    dispatch(logout());
    localStorage.removeItem("user");
    notification.success({
      message: "Đăng xuất",
      description: "Đăng xuất thành công",
    });
    if (["/host", "/staff", "user"].includes(location.pathname)) {
      navigate("/home");
    }
  };

  const items = [
    {
      key: "1",
      label: <Link to={"/info"}>Thông tin</Link>,
    },
    {
      key: "2",
      label: <Link to={"/setting"}>Trợ giúp</Link>,
    },
    {
      key: "3",
      label: <Link to={"/setting"}>Cài đặt</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: <div onClick={logOutHandler}>Đăng xuất</div>,
    },
  ];

  return (
    <div className="Header tw-px-24 tw-flex tw-flex-row tw-p-5 tw-fixed tw-top-0 tw-justify-between">
      <div
        className="Dogtor tw-flex tw-flex-row tw-items-center"
        onClick={() => navigate("/home")}
      >
        <img
          src="/assets/dogtor.png"
          alt="dogtor"
          width="60px"
          height="60px"
          className="tw-rounded-full"
        ></img>
        <div className="tw-font-bold tw-text-4xl tw-text-white tw-ml-2">
          Pharma Track
        </div>
      </div>
      <div className="tw-flex tw-flex-row tw-items-center">
        {[
          {
            title: "Trang chủ",
            page: "home",
          },
          {
            title: "Đăng kí khám bệnh",
            page: "bookap",
          },
          {
            title: "Tổng quan",
            page: user.role,
          },
        ].map(({ page, title }) => (
          <div className="tw-ml-7 tw-text-white tw-font-semibold tw-text-base">
            <Link to={`/${page || "login"}`}>{title}</Link>
          </div>
        ))}
        {!isAuthUser && (
          <div
            className="header_primary-btn"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </div>
        )}
        {isAuthUser && (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <div className="header_primary-btn">Xin chào, {user.username}</div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Header;
