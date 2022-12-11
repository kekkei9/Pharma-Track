import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import RoleHeader from "../../components/RoleHeader/RoleHeader";
import RoleCardList from "../../components/RoleCardList/RoleCardList";
import "./RolePage.scss";
import { createUserUsingEmailPassword } from "../../firebase";

const RolePage = (props) => {
  const navigate = useNavigate();
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

  const handleSubmit = (tab) => {
    if (tab >= 3 || tab < 0) {
      alert("Mời bạn chọn role");
    } else {
      createUserUsingEmailPassword({ ...state, role: RoleData[tab].name });
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
