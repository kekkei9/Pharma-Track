import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RolePage from "../pages/RolePage/RolePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import BookApPage from "../pages/BookApPage/BookApPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import StaffProfilePage from "../pages/StaffProfilePage/StaffProfilePage";

import StaffTable from "../components/StaffTable/StaffTable";
import ClinicProfile from "../components/ClinicProfile/ClinicProfile";
import StaffAppointmentTable from "../components/StaffAppointmentTable/StaffAppointmentTable";
import UserAppointmentTable from "../components/UserAppointmentTable/UserAppointmentTable";
import App from "../App";
import PATH from "./routerPath/publicPath";
import Header from "../components/Header/Header";
import PrivateRouter from "./customRouter/PrivateRouter";
import PayMentPage from "../pages/PayMentPage/PayMentPage";

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

    <Route exact path={PATH.PAY_MENT} element={<PayMentPage/>}  />
    <Route
      exact
      path={PATH.STAFF_TABLE_PATH}
      element={
        <PrivateRouter component={StaffTable} accessibleRoles={["host"]} />
      }
    />

    <Route
      path={PATH.STAFF_DYNAMIC_PATH}
      element={
        <PrivateRouter
          component={StaffProfilePage}
          accessibleRoles={["host"]}
        />
      }
    />
    <Route
      exact
      path={PATH.CLINIC_PROFILE_PATH}
      element={
        <PrivateRouter component={ClinicProfile} accessibleRoles={["host"]} />
      }
    />

    <Route
      exact
      path={PATH.STAFF_APPOINTMENTS_PATH}
      element={
        <PrivateRouter
          component={StaffAppointmentTable}
          accessibleRoles={["staff"]}
        />
      }
    />

    <Route
      exact
      path={PATH.STAFF_QRSCAN_PATH}
      element={
        <PrivateRouter component={ClinicProfile} accessibleRoles={["staff"]} />
      }
    />

    <Route
      exact
      path={PATH.USER_APPOINTMENTS_PATH}
      element={
        <PrivateRouter
          component={UserAppointmentTable}
          accessibleRoles={["user"]}
        />
      }
    />

    <Route
      exact
      path={PATH.USER_PROFILE_PATH}
      element={
        <PrivateRouter
          component={UserProfilePage}
          accessibleRoles={["host", "staff", "user"]}
        />
      }
    />

    {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
);

export default AppRouter;
