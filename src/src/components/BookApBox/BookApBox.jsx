import React, { useState } from "react";
import "./BookApBox.scss";
import BookApTab1 from "../BookApTab1/BookApTab1";
import BookApTab2 from "../BookApTab2/BookApTab2";
import BookApTab3 from "../BookApTab3/BookApTab3";
import StepComponent from "../StepComponent/StepComponent";

import { Button } from "antd";
import BookPage2 from "../BookPage2/BookPage2";
import BookingFormContainer from "../../containers/BookingForm/BookingForm.container";


import { Form, Field } from "formik";
import { Form as AntdForm } from "antd";


const BookApBox = (props) => {
  const [current, setCurrent] = useState(0);
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
    <div className="Box">
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

      {current === 0 ? (
        <BookApTab1 />
      ) : current === 1 ? (
        <BookPage2 /> 
        // <BookingFormContainer/>
      ) : (
        <BookApTab3 />
      )}
      <div className="tw-flex tw-justify-center tw-my-12">
        {current > 0 && (
          <div className="tw-px-9">
            <Button
              danger
              size="large"
              onClick={() => {
                let temp = current;
                setCurrent(temp - 1);
              }}
            >
              Quay lại
            </Button>
          </div>
        )}
        {current < 2 && (
          <div className="tw-px-9">
            <Button
              size="large"
              style={{
                backgroundColor: "rgb(0, 82, 212)",
                color: "white",
              }}
              onClick={() => {
                let temp = current;
                setCurrent(temp + 1);
              }}
            >
              Tiếp tục
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookApBox;
