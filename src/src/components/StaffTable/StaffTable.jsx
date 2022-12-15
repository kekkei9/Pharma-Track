import React, { useEffect, useState } from "react";
import "./StaffTable.scss";
import { Table, notification, Popconfirm } from "antd";
import Fetch from "../../fetch";
import { useSelector } from "react-redux";
import { useHref, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

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
    width: "15%",
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
    width: "15%",
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
      <Popconfirm
        title="Bạn có muốn xóa người này khỏi phòng khám?"
        onConfirm={async () => {
          try {
            const response = Fetch(
              "DELETE",
              "https://pharma-track.onrender.com/api/v1/staff",
              {
                id_staff: record.id_staff,
              }
            );
            if (response.result === "success") {
              notification.success({
                message: "Bảng nhân viên",
                description: `Xóa nhân viên ${record.id_staff} thành công`,
              });
              return;
            }
          } catch (e) {
            console.error(e);
          }
          notification.error({
            message: "Bảng nhân viên",
            description: `Xóa nhân viên ${record.id_staff} thất bại`,
          });
        }}
        okText="Có"
        cancelText="Không"
      >
        <a
          style={{ color: "#1890FF" }}
          onClick={() => {
            console.log("ehe");
          }}
          href="#"
        >
          Xoá
        </a>
      </Popconfirm>
    ),
    width: "10%",
  },
];

const StaffTable = (props) => {
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState([]);
  const [requestData, setRequestData] = useState(new Date());
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
  }, [requestData]);

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
