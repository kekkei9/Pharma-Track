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

const RolePage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [tab, setTab] = useState(-1);

  const RoleData = [
    {
      name: "host",
      title: "Chủ phòng khám",
      imgsrc: "/assets/host.png",
    },
    {
      name: "staff",
      title: "Nhân viên",
      imgsrc: "/assets/staff.png",
    },
    {
      name: "user",
      title: "Người dùng",
      imgsrc: "/assets/user.png",
    },
  ];

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
          await setUserInfo(uid, { ...state, role, uid });
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
    <div className="RolePage">
      <div>
        <RoleHeader />
      </div>
      <RoleCardList tab={tab} setTab={setTab} RoleData={RoleData} />
      <div className="RoleButton tw-flex tw-flex-row tw-justify-center tw-space-x-40 ">
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
            onClick={() => handleSubmit(tab)}
          >
            TIẾP TỤC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
