import React from "react";

import BookPage2 from "../../components/BookPage2/BookPage2";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const BookingFormContainer = () => {
  //  const dispatch = useDispatch();
    const navigate = useNavigate();
   // const navigate = useNavigate();
    const initialValues = {
        username: "",
        birthday: "",
        gender:"",
        email: "",
        address: "",
        number: "",
        symptom: "",
        date:"",
        time:""
      };
// birthday, , date, time 
      const handleSubmit =(formProps) => {
        const userProps = (({   username,birthday,gender,email,address,number, symptom,date,time }) => ({
          username,
          birthday,
          gender,
          email,
          address,
          number, 
          symptom,
          date,
          time
        }))(formProps);
      }

  return (
    <div className="BookingFormContainer">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {BookPage2}
      </Formik>
    </div>
  );

};

export default BookingFormContainer;
