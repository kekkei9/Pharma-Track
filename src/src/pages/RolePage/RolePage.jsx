import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, notification } from "antd";
import RoleHeader from "../../components/RoleHeader/RoleHeader";
import RoleCardList from "../../components/RoleCardList/RoleCardList";
import CreateClinicFormContainer from "../../containers/CreateClinicForm/CreateClinicForm.container";
import StaffSignUpFormContainer from "../../containers/StaffSignUpForm/StaffSignUpForm.container";

import "./RolePage.scss";
import {
  createUserUsingEmailPassword,
  setUserInfo,
  getUserData,
} from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authentication/authentication.slice";
import InputForm from "../../components/InputForm/InputForm";
import BackButton from "../../components/BackButton/BackButton";
import Fetch from "../../fetch";

const RolePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [tab, setTab] = useState(-1);
  const [warnText, setWarnText] = useState();
  const hostFormRef = useRef(null);
  const staffFormRef = useRef(null);
  let bonusClinic = {};

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

  const handleSubmitHost = async () => {
    if (hostFormRef.current) {
      hostFormRef.current.handleSubmit();
      if (
        !(
          hostFormRef.current.isValid &&
          Object.keys(hostFormRef.current.touched).length > 0
        )
      ) {
        return false;
      }
      try {
        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/clinic",
          {
            ...hostFormRef.current.values,
            status_clinic: true,
          }
        );
        if (response.results === "that bai") {
          notification.error({
            message: "Tạo phòng khám",
            description: `Phòng khám với ID ${hostFormRef.current.values.id_clinic} đã tồn tại`,
          });
          return false;
        }
      } catch (e) {
        console.error(e);
      }
    }
    bonusClinic.id_clinic = hostFormRef.current.values.id_clinic;
    return true;
  };

  const handleSubmitStaff = async () => {
    if (staffFormRef.current) {
      staffFormRef.current.handleSubmit();
      if (
        !(
          staffFormRef.current.isValid &&
          Object.keys(staffFormRef.current.touched).length > 0
        )
      ) {
        return false;
      }
      try {
        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/staff",
          {
            ...staffFormRef.current.values,
          }
        );

        if (response.results === "that bai") {
          notification.error({
            message: "Tạo tài khoản nhân viên",
            description: `Không tìm thấy phòng khám với ID ${staffFormRef.current.values.id_clinic}`,
          });
          return false;
        }
        bonusClinic.id_staff = response.data.id_staff;
        bonusClinic.id_clinic = response.data.id_clinic;
      } catch (e) {
        console.error(e);
      }
    }
    return true;
  };

  const handleSubmit = async (tab) => {
    if (tab >= 3 || tab < 0) {
      setWarnText("Bạn chưa chọn loại tài khoản !");
    } else {
      const role = RoleData[tab].name;
      try {
        if (!!state.password) {
          const user = await createUserUsingEmailPassword({
            ...state,
            role,
            ...bonusClinic,
          });
          if (!user) {
            notification.error({
              message: "Đăng kí",
              description: "Lỗi đăng kí",
            });
            return;
          }
          const { uid } = user;
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
      {tab === -1 && warnText && (
        <div className="warn-container tw-text-red-500 tw-text-base">
          {warnText}
        </div>
      )}
      <div className="bonus-role-container tw-mt-5">
        {tab === 0 && (
          <CreateClinicFormContainer {...state} formRef={hostFormRef} />
        )}
        {tab === 1 && (
          <StaffSignUpFormContainer {...state} formRef={staffFormRef} />
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
