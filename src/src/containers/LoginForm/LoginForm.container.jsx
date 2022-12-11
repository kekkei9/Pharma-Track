import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Formik } from "formik";
import { signInUsingEmailPassword } from "../../firebase";
import { setUser } from "../../redux/authentication/authentication.slice";

const initialValues = {
  email: "",
  password: "",
};

const LoginFormContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (formProps) => {
    try {
      const { email, password } = formProps;
      const user = await signInUsingEmailPassword(email, password, "host");
      if (!user) {
        console.log("unlog");
        return;
      }
      const { uid } = user;
      dispatch(setUser({ uid }));
      console.log("logged");
    } catch (e) {
      console.error(e);
    }
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
