import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Formik } from "formik";
import { signInUsingEmailPassword, getUserRole } from "../../firebase";
import {
  logout,
  setUser,
} from "../../redux/authentication/authentication.slice";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formProps) => {
    try {
      const { email, password } = formProps;
      const user = await signInUsingEmailPassword(email, password, "host");
      if (!user) {
        return;
      }
      const { uid } = user;
      const roleName = await getUserRole(uid);
      const userData = { uid, roleName };
      dispatch(setUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/home");
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
