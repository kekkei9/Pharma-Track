import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Formik } from "formik";
import { useState, useEffect } from "react";

const SignUpFormContainer = () => {
  const [provinces, setProvinces] = useState([]);

  const initialValues = {
    email: "",
    password: "",
    retypePassword: "",
    province: "Hà Nội",
    provinceOptions: provinces,
  };

  const handleSubmit = (formProps) => {
    const { email, password } = formProps;
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  useEffect(() => {
    fetch("data/vn.json")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(
          data
            .map((d) => d.admin_name)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
      });
  }, []);

  return (
    <div className="LoginFormContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {SignUpForm}
      </Formik>
    </div>
  );
};

export default SignUpFormContainer;
