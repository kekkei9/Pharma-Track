import React from "react";
import { useNavigate } from "react-router-dom";
import "./StaffTablePage.scss";
import StaffTable from "../../components/StaffTable/StaffTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const StaffTablePage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="StaffTablePage tw-flex tw-flex-col tw-items-center">
      <div className="tw-w-2/3 tw-justify-end tw-flex tw-flex-row tw-mt-5">
        <Button
          type="default"
          onClick={() => console.log("navigate to insert staff form")}
          className="tw-mr-5 tw-flex tw-flex-row tw-items-center tw-rounded-3xl tw-px-4 tw-py-5"
        >
          <FontAwesomeIcon icon={faPlus} className="tw-self-center" />
          <div className="tw-ml-2">Thêm nhân viên</div>
        </Button>
      </div>
      <StaffTable className={"tw-mt-5"} />
    </div>
  );
};

export default StaffTablePage;
