import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, notification } from "antd";
import RoleHeader from "../../components/RoleHeader/RoleHeader";
import RoleCardList from "../../components/RoleCardList/RoleCardList";
import "./RolePage.scss";
import {
  createUserUsingEmailPassword,
  setUserInfo,
  getUserData,
} from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authentication/authentication.slice";
import { Field } from "formik";
import InputForm from "../../components/InputForm/InputForm";
import BackButton from "../../components/BackButton/BackButton";
import Fetch from "../../fetch";

const RolePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [tab, setTab] = useState(-1);
  const [IDInput, setIDInput] = useState("");

  const RoleData = [
    {
      name: "host",
      title: "Chủ Phòng Khám",
      imgsrc: "/assets/host.png",
    },
    {
      name: "staff",
      title: "Nhân Viên",
      imgsrc: "/assets/staff.png",
    },
    {
      name: "user",
      title: "Người Dùng",
      imgsrc: "/assets/user.png",
    },
  ];

  const handleSubmitStaff = async () => {
    const response = await Fetch(
      "POST",
      "https://pharma-track.onrender.com/api/v1/clinic/id_clinic",
      {
        id_clinic: IDInput,
      }
    );
    if (!Array.isArray(response)) {
      notification.error({
        message: "Đăng kí",
        description: response.reason,
      });
      return false;
    }
    return true;
  };

  const handleSubmitHost = async () => {
    return true;
  };

  const handleSubmit = async (tab) => {
    if (tab >= 3 || tab < 0) {
      alert("Mời bạn chọn role");
    } else {
      const role = RoleData[tab].name;
      try {
        if (!!state.password) {
          const user = await createUserUsingEmailPassword({ ...state, role });
          if (!user) {
            notification.error({
              message: "Đăng kí",
              description: "Lỗi đăng kí",
            });
            return;
          }
          const { uid } = user;
          const stateSlice = (({ email, province, username }) => ({
            email,
            province,
            username,
          }))(state);
          await setUserInfo(uid, { ...stateSlice, role, uid });
          notification.success({
            message: "Đăng kí",
            description: "Đăng kí thành công",
          });
          const userData = await getUserData(uid);
          dispatch(setUser(userData));
          localStorage.setItem("user", JSON.stringify(userData));
          notification.success({
            message: "Đăng nhập",
            description: "Đăng nhập thành công",
          });
          navigate("/home");
        } else {
          setUserInfo(state.uid, { ...state, role });
          navigate("/login");
          notification.success({
            message: "Đăng kí",
            description: "Đăng kí thành công",
          });
        }
      } catch (e) {
        notification.error({
          message: "Đăng kí",
          description:
            e.code === "auth/email-already-in-use" ? "Email đã được dùng" : "",
        });
      }
    }
  };

  return (
    <div className="RolePage tw-flex tw-flex-col tw-items-center">
      <div>
        <BackButton />
        <RoleHeader />
        <RoleCardList tab={tab} setTab={setTab} RoleData={RoleData} />
      </div>
      <div className="bonus-role-container tw-mt-5">
        {tab === 0 && <div>Tạo phòng khám</div>}
        {tab === 1 && (
          <InputForm
            title="Nhập ID phòng khám"
            placeholder="ID phòng khám"
            setInput={setIDInput}
          />
        )}
      </div>
      <div className="RoleButton tw-flex tw-flex-row tw-justify-center tw-space-x-40 tw-mt-5">
        <div>
          <Button
            className="button1"
            type="primary"
            shape="round"
            style={{ width: "150px", height: "40px" }}
            onClick={() => navigate(-1)}
          >
            QUAY LẠI
          </Button>
        </div>

        <div>
          <Button
            className="button2"
            type="primary"
            shape="round"
            style={{ backgroundColor: "blue", width: "150px", height: "40px" }}
            onClick={async () => {
              if (tab === 0) {
                if (!(await handleSubmitHost())) return;
              } else if (tab === 1) {
                if (!(await handleSubmitStaff())) return;
              }
              handleSubmit(tab);
            }}
          >
            TIẾP TỤC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
