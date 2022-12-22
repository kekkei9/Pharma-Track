import React from "react";
import "./LoginPage.scss";
import LoginFormContainer from "../../containers/LoginForm/LoginForm.container";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import BackButton from "../../components/BackButton/BackButton";
import LoginProviders from "../../components/LoginProviders/LoginProviders";

const LoginPage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="LoginPage tw-flex tw-flex-col tw-items-center">
      <div
        style={{ width: "400px" }}
        className="tw-flex tw-flex-col tw-items-center"
      >
        <BackButton />
        <img
          src={`${process.env.PUBLIC_URL}/assets/dogtor.png`}
          alt="dogtor"
          width="140px"
          height="140px"
          className="tw-rounded-full"
        />
        <LoginFormContainer />
        <div className="tw-mt-3">Đăng kí tài khoản, nếu bạn chưa đăng kí!</div>
        <Button
          className="tw-mt-3"
          style={{ width: "400px" }}
          onClick={() => navigate("/signup")}
        >
          Đăng kí tài khoản
        </Button>
        <div className="tw-mt-4">Hoặc đăng nhập với</div>
        <LoginProviders />
      </div>
    </div>
  );
};

export default LoginPage;
