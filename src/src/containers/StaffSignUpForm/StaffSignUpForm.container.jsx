import React, { useImperativeHandle } from "react";
import StaffSignUpForm from "../../components/StaffSignUpForm/StaffSignUpForm";
import { Formik } from "formik";
import { useSelector } from "react-redux";

const StaffSignUpFormContainer = ({ username, province, formRef }) => {
  const initialValues = {
    OTP: "",
    id_clinic: "",
    name: username || "",
    province: province || "",
    number: "",
    type: "Bác sĩ",
    department: "A",
  };

  return (
    <div className="StaffSignUpFormContainer">
      <Formik initialValues={initialValues} innerRef={formRef}>
        {StaffSignUpForm}
      </Formik>
    </div>
  );
};

export default StaffSignUpFormContainer;
