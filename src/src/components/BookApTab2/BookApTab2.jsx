import React from "react";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import InputForm from "../InputForm/InputForm";
import PickerForm from "../PickerForm/PickerForm";
import "./BookApTab2.scss";
import { useNavigate } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";
import BookingFormContainer from "../../containers/BookingForm/BookingForm.container";
import { useRef } from "react";

const BookApTab2 = (props) => {
  const navigate = useNavigate();
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
