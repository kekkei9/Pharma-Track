import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import LoginFormContainer from "../../containers/LoginForm/LoginForm.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const LoginPage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="LoginPage tw-flex tw-flex-col tw-items-center">
      <div
        style={{ width: "400px" }}
        className="tw-flex tw-flex-col tw-items-center"
      >
        <div
          className="back-button tw-flex tw-flex-row tw-items-center tw-self-start"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <div className="tw-ml-2 tw-text-base">Trở lại</div>
        </div>
        <img
          src="/assets/dogtor.png"
          alt="dogtor"
          width="140px"
          height="140px"
          className="tw-rounded-full"
        />
        <LoginFormContainer />
        <div className="tw-mt-4">Đăng kí tài khoản, nếu bạn chưa đăng kí!</div>
        <Button
          className="default-btn tw-mt-4"
          style={{ width: "400px" }}
          onClick={() => navigate("/signup")}
        >
          Đăng kí tài khoản
        </Button>
        <div className="tw-mt-4">Hoặc đăng nhập với</div>
        <div className="provider-container tw-flex tw-flex-row tw-m-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google icon"
            style={{
              width: "35px",
              height: "35px",
              border: "9999px",
            }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
            alt="google icon"
            style={{
              width: "35px",
              height: "35px",
              border: "9999px",
              marginLeft: "16px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
