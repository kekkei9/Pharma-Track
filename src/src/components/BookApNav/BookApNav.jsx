import React from "react";
import "./BookApNav.scss";
import StepComponent from "../StepComponent/StepComponent";
import { useNavigate } from "react-router-dom";

const BookApNav = ({ current }) => {
  const StepData = [
    {
      step: "Bước 1",
      content: "Chọn phòng khám",
    },
    {
      step: "Bước 2",
      content: "Phiếu thông tin",
    },
    {
      step: "Bước 3",
      content: "Xác nhận & Thanh toán",
    },
  ];

  return (
    <div className="BookApNav">
      <div className="navbar tw-mt-8 tw-pl-48 tw-pr-16 tw-flex tw-py-5 tw-w-screen tw-justify-between tw-items-center">
        <div className=" tw-font-normal tw-text-3xl tw-text-black">
          Đặt lịch khám bệnh
        </div>
        <div className=" tw-flex tw-flex-row tw-items-center">
          <div className=" tw-text-black  tw-text-base">Trang chủ</div>
          <div className="tw-ml-3 tw-text-black tw-text-base">
            / Đặt lịch khám bệnh
          </div>
        </div>
      </div>
      <div className="Boxes tw-flex tw-mx-auto tw-max-w-5xl tw-mt-12 ">
        {StepData.map((step, index) => (
          <StepComponent
            {...step}
            style={
              current === index
                ? {
                    background: "#20A0D8",
                    color: "white",
                  }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BookApNav;
