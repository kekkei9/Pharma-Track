import React, { useEffect, useState } from "react";
import "./StaffAppointmentTable.scss";
import { Table, Button } from "antd";
import Fetch from "../../fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
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
        <a style={{ color: "#1890FF" }}>Invite {record.fullName}</a>
        <a style={{ color: "#1890FF" }}>Delete</a>
      </div>
    ),
    width: "30%",
  },
];

const StaffAppointmentTable = (props) => {
  const [data, setData] = useState([]);
  const [requestData, setRequestData] = useState(new Date());
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await Fetch(
  //       "GET",
  //       "https://pharma-track.onrender.com/api/v1/appointment"
  //     );
  //     console.log(response);
  //     response.json().then((json) => {
  //       setData(response);
  //     });
  //   };
  // }, []);
  return (
    <div className="StaffAppointmentTable tw-flex tw-flex-col tw-items-center">
      <div className="tw-w-2/3 tw-mt-5 tw-flex tw-flex-col">
        <Button
          type="default"
          onClick={() => setRequestData(new Date())}
          className="tw-w-fit tw-self-end tw-mr-3\"
        >
          <FontAwesomeIcon icon={faRotateRight} className="tw-self-center" />
          <div className="tw-ml-2">Tải lại</div>
        </Button>
        <Table
          className="staff-table tw-mt-5"
          rowClassName={(_, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
};

export default StaffAppointmentTable;
