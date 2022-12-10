import React from "react";
import "./LoginPage.scss";
import LoginFormContainer from "../../containers/LoginForm/LoginForm.container";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import BackButton from "../../components/BackButton/BackButton";

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
          src="/assets/dogtor.png"
          alt="dogtor"
          width="140px"
          height="140px"
          className="tw-rounded-full"
        />
        <LoginFormContainer />
        <div className="tw-mt-3">Đăng kí tài khoản, nếu bạn chưa đăng kí!</div>
        <Button
          className="default-btn tw-mt-3"
          style={{ width: "400px" }}
          onClick={() => navigate("/signup")}
        >
          Đăng kí tài khoản
        </Button>
        <div className="tw-mt-4">Hoặc đăng nhập với</div>
        <div className="provider-container tw-flex tw-flex-row tw-m-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google icon"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
            alt="facebook icon"
            className="tw-ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
