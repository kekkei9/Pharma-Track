import React from "react";
import "./Header.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authentication/authentication.slice";
import { signOutUser } from "../../firebase";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthUser } = useSelector((state) => state.authentication);

  const logOutHandler = async () => {
    await signOutUser();
    dispatch(logout());
    localStorage.removeItem("user");
    if (["/host", "/staff", "user"].includes(location.pathname)) {
      navigate("/home");
    }
  };

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
            page: user.roleName,
          },
        ].map(({ page, title }) => (
          <div className="tw-ml-7 tw-text-white tw-font-semibold tw-text-base">
            <Link to={`/${page || ""}`}>{title}</Link>
          </div>
        ))}
        {!isAuthUser && (
          <div
            className="RegBtn tw-px-4 tw-py-1.5 tw-bg-white tw-font-semibold tw-text-base tw-ml-7"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </div>
        )}
        {isAuthUser && (
          <div
            className="RegBtn tw-px-4 tw-py-1.5 tw-bg-white tw-font-semibold tw-text-base tw-ml-7"
            onClick={logOutHandler}
          >
            Đăng xuất
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
