import React from "react";
import "./BookApTab2.scss";
import { useNavigate, useLocation } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";
import BookingFormContainer from "../../containers/BookingForm/BookingForm.container";
import { useRef } from "react";

const BookApTab2 = (props) => {
  const navigate = useNavigate();

  const { state } = useLocation()
  console.log(state)

  const bookingFormRef = useRef("a");

  const onClickBack = () => {
    navigate("/bookap");
  };

  const onClickNext = () => {
    if (bookingFormRef.current) {
      bookingFormRef.current.handleSubmit();
      if (
        !(
          bookingFormRef.current.isValid &&
          Object.keys(bookingFormRef.current.touched).length > 0
        )
      ) {
        return false;
      }
      console.log(bookingFormRef.current.values);
    }
    window.open(
      "https://pharma-track.onrender.com/api/v1/payment/create_payment_url1"
    );

    // navigate("/bookap3");
    return true;
  };

  return (
    <div className="BookApTab2">
      <BookingFormContainer formRef={bookingFormRef} />
      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab2;
