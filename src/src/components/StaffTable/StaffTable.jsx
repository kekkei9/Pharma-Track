import React from "react";
import "./StaffTable.scss";
import { Table } from "antd";

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

const data = [
  {
    id: 123,
    firstName: "Le Thi",
    lastName: "Van",
    email: "lethivan@gmail.com",
    phone: "0942347343",
    role: "CS",
  },
  {
    id: 1245,
    firstName: "Nguyen Van",
    lastName: "A",
    email: "nguyenvana@gmail.com",
    phone: "0942478458",
    role: "CS",
  },
  {
    id: 1245,
    firstName: "Nguyen Van",
    lastName: "A",
    email: "nguyenvana@gmail.com",
    phone: "0942478458",
    role: "CS",
  },
  {
    id: 1256,
    firstName: "Ho Trong",
    lastName: "Tri",
    email: "hotrongtri@gmail.com",
    phone: "0942478444",
    role: "CS",
  },
  {
    id: 1256,
    firstName: "Ho Trong",
    lastName: "Tri",
    email: "hotrongtri@gmail.com",
    phone: "0942478444",
    role: "CS",
  },
  {
    id: 1256,
    firstName: "Ho Trong",
    lastName: "Tri",
    email: "hotrongtri@gmail.com",
    phone: "0942478444",
    role: "CS",
  },
  {
    id: 1233,
    firstName: "Ly Van",
    lastName: "Hoa",
    email: "lyvanhoa@gmail.com",
    phone: "0942478334",
    role: "CS",
  },
  {
    id: 1233,
    firstName: "Ly Van",
    lastName: "Hoa",
    email: "lyvanhoa@gmail.com",
    phone: "0942478334",
    role: "CS",
  },
  {
    id: 1233,
    firstName: "Ly Van",
    lastName: "Hoa",
    email: "lyvanhoa@gmail.com",
    phone: "0942478334",
    role: "CS",
  },
  {
    id: 1233,
    firstName: "Ly Van",
    lastName: "Hoa",
    email: "lyvanhoa@gmail.com",
    phone: "0942478334",
    role: "CS",
  },
  {
    id: 1233,
    firstName: "Ly Van",
    lastName: "Hoa",
    email: "lyvanhoa@gmail.com",
    phone: "0942478334",
    role: "CS",
  },
];

const StaffTable = (props) => {
  return (
    <div className="StaffTable tw-w-2/3 center-screen tw-mt-5">
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

export default StaffTable;
