import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RolePage from "../pages/RolePage/RolePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import BookApPage from "../pages/BookApPage/BookApPage";
import HostPage from "../pages/HostPage/HostPage";
import StaffPage from "../pages/StaffPage/StaffPage";
import UserPage from "../pages/UserPage/UserPage";
import App from "../App";
import PATH from "./routerPath/publicPath";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import PrivateRouter from "./customRouter/PrivateRouter";

const AppRouter = () => (
  <Routes>
    <Route path="/:page" element={<HomePage />}></Route>
    <Route exact path="/" element={<HomePage />}></Route>

    <Route exact path="*" element={<ErrorPage code={404} />} />
    <Route exact path={PATH.HOME_PAGE_PATH} element={<HomePage />} />
    <Route exact path={PATH.SIGN_UP_PATH} element={<SignUpPage />} />
    <Route exact path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    <Route exact path={PATH.LOGIN_PATH} element={<LoginPage />} />
    <Route exact path={PATH.BOOK_AP_PATH} element={<BookApPage />} />

    <Route
      exact
      path={PATH.HOST_DASHBOARD}
      element={
        <PrivateRouter component={HostPage} accessibleRoles={["host"]} />
      }
    />
    <Route
      exact
      path={PATH.STAFF_DASHBOARD}
      element={
        <PrivateRouter
          component={StaffPage}
          accessibleRoles={["host", "staff"]}
        />
      }
    />
    <Route
      exact
      path={PATH.USER_DASHBOARD}
      element={
        <PrivateRouter
          component={UserPage}
          accessibleRoles={["host", "staff", "user"]}
        />
      }
    />
    {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
);

export default AppRouter;
