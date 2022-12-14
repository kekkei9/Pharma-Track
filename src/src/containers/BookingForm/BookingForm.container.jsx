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
        //gender:"",
        email: "",
        address: "",
        phonenumber: "",
        symptom: "",
      };

      const handleSubmit = async (formProps) => {

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
