import React from "react";
import "./BookApTab3.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";

const BookApTab3 = (props) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/bookap2");
  };

  const onClickNext = () => {
    navigate("/homepage");
  };

  return (
    <div className="BookApTab3">
      <div className="tw-flex tw-mt-10 tw-max-w-4xl tw-mx-auto tw-justify-between">
        <div className="tw-border-2 tw-px-20 tw-py-20 tw-mr-5">
          Chọn hình thức thanh toán
        </div>
        <div className="tw-border-2 tw-px-20 tw-py-40">
          <div>Thanh toán thành công</div>
          <div>Cảm ơn quý khách đã tin tưởng Pharma Track </div>
        </div>
        <Button
          type="primary"
          href="https://pharma-track.onrender.com/api/v1/payment/create_payment_url1"
          shape="default"
          size="large"
        >
          {" "}
          Thanh toán{" "}
        </Button>
      </div>

      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab3;
