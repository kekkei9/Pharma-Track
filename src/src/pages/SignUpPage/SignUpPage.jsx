import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpFormContainer from "../../containers/SignUpForm/SignUpForm.container";
import "./SignUpPage.scss";
import BackButton from "../../components/BackButton/BackButton";
import { Button } from "antd";

const SignUpPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="SignUpPage tw-flex tw-flex-col tw-items-center">
      <div style={{ width: "400px" }}>
        <BackButton />
      </div>
      <img
        src="/assets/dogtor.png"
        alt="dogtor"
        width="140px"
        height="140px"
        className="tw-rounded-full"
      />
      <SignUpFormContainer />
      <Button
        className="primary-btn tw-mt-4"
        style={{
          width: "400px",
          backgroundColor: "#0067A9",
          fontWeight: 600,
        }}
        onClick={() => navigate(location.pathname + "/role")}
      >
        Tiếp tục
      </Button>
      <div className="tw-mt-4">Hoặc đăng nhập với</div>
      <div className="provider-container tw-flex tw-flex-row tw-m-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt="google icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
          alt="google icon"
          className="tw-ml-2"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
