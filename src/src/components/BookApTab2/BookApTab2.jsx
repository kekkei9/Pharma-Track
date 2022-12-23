import React from "react";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import InputForm from "../InputForm/InputForm";
import PickerForm from "../PickerForm/PickerForm";
import "./BookApTab2.scss";
import { useNavigate } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";
import BookingFormContainer from "../../containers/BookingForm/BookingForm.container";

const BookApTab2 = (props) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/bookap");
  };

  const onClickNext = () => {
    navigate("/bookap3");
  };

  return (
    <div className="BookApTab2">
      <BookingFormContainer />
      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab2;
