import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserRole,
  popUpWithGoogle,
  popUpWithFacebook,
} from "../../firebase";
import { setUser } from "../../redux/authentication/authentication.slice";
import "./LoginProviders.scss";

const LoginProviders = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const providerHandler = async (asyncFunc) => {
    try {
      const { user, isExist } = await asyncFunc();
      const userProps = (({ displayName: username, email, uid }) => ({
        username,
        email,
        uid,
      }))(user);
      if (!isExist) {
        navigate("/signup/role", { state: userProps });
      } else {
        const { uid } = user;
        const roleName = await getUserRole(uid);
        const userData = { uid, roleName };
        dispatch(setUser(userData));
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/home");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="LoginProviders tw-flex tw-flex-row tw-m-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="google icon"
        onClick={() => providerHandler(popUpWithGoogle)}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
        alt="facebook icon"
        className="tw-ml-2"
        onClick={() => providerHandler(popUpWithFacebook)}
      />
    </div>
  );
};

export default LoginProviders;
