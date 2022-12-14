import React, { useEffect, useState } from "react";
import "./StaffTable.scss";
import { Table } from "antd";
import Fetch from "../../fetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "ID",
    dataIndex: "id_staff",
    key: "if_staff",
    width: "auto",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Số điện thoại",
    dataIndex: "number",
    key: "number",
    width: "20%",
  },
  {
    title: "Chức vụ",
    dataIndex: "type",
    key: "type",
    width: "10%",
  },
  {
    title: "Khoa",
    dataIndex: "department",
    key: "department",
    width: "10%",
  },
  {
    title: "Action",
    key: "Action",
    render: (_, record) => (
      <div
        className="flex flex-row gap-5"
        onClick={(e) => console.log(record.staff_id)}
      >
        <a style={{ color: "#1890FF" }}>Invite {record.name}</a>
        <a style={{ color: "#1890FF" }}>Delete</a>
      </div>
    ),
    width: "30%",
  },
];

const StaffTable = (props) => {
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState([]);
  const { user } = useSelector((state) => state.authentication);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchStaff = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/staff"
        );
        setStaffData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStaff();

    return () => abortController.abort();
  }, [user.uid]);

  return (
    <div className="StaffTable tw-w-2/3 center-screen tw-mt-5">
      <Table
        onRow={(record) => ({
          onDoubleClick: () => navigate("/host/staffs/" + record.id_staff),
        })}
        className="staff-table"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={staffData}
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default StaffTable;
