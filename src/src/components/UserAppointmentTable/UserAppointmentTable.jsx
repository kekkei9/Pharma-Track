import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserAppointmentTable.scss";
import { Table } from "antd";
import Fetch from "../../fetch";
import { getUserData } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: "30%",
  },
  {
    title: "Doctor Name",
    dataIndex: "doctor",
    key: "doctor",
    width: "30%",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "30%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "10%",
  },
];



const UserAppointmentTable = (props) => {
  const navigate = useNavigate();

  const { user } = useSelector((state)=> state.authentication)
  const {uid} = user

  const [userAppointment, setUserAppointment] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      try {
        const response = await Fetch(
          "GET",
          `https://pharma-track.onrender.com/api/v1/appointment/id_user?id_user=${uid}`,
        );
        setUserAppointment(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUser();

    return () => abortController.abort();
  }, []);

  return (
    <div className="UserAppointmentTable tw-w-2/3 center-screen tw-mt-5">
      <div className = 'booking tw-flex tw-justify-center tw-mb-5 tw-font-bold tw-text-4xl '>Lịch hẹn của bạn</div>
      <Table
        className="staff-table"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={userAppointment}
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default UserAppointmentTable;
