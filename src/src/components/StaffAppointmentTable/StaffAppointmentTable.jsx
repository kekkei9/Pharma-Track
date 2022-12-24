import React, { useEffect, useState } from "react";
import "./StaffAppointmentTable.scss";
import { Table } from "antd";
import Fetch from "../../fetch";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "auto",
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (_, record) => <a>{record.firstName + " " + record.lastName}</a>,
    width: "40%",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: "40%",
  },
  {
    title: "Action",
    key: "Action",
    render: (_, record) => (
      <div className="flex flex-row gap-5">
        <a style={{ color: "#1890FF" }}>Invite {record.lastName}</a>
        <a style={{ color: "#1890FF" }}>Delete</a>
      </div>
    ),
    width: "30%",
  },
];




const StaffAppointmentTable = (props) => {
  const [data, setData] = useState({});
useEffect(()=>{
  
const fetchData= async() =>{
const response =await Fetch("GET", "https://pharma-track.onrender.com/api/v1/appointment");
console.log(response)
response.json().then(json=>{
  setData(response)
})}
}
, [])
  return (
    <div className="StaffAppointmentTable tw-w-2/3 center-screen tw-mt-5">
      <Table
        className="staff-table"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default StaffAppointmentTable;


