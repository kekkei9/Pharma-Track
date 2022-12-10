import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Formik } from "formik";

const initialValues = {
  bookingClient: "",
  password: "",
};

const LoginFormContainer = () => {
  const handleSubmit = (formProps) => {
    const { email, password } = formProps;
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div className="LoginFormContainer">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {LoginForm}
      </Formik>
    </div>
  );
};

export default LoginFormContainer;
