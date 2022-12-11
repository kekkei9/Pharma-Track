import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import { RootState } from "../../redux/store";

const DynamicRouter = ({ componentList, accessibleRoles, ...rest }) => {
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  console.log(user, isAuthUser);
  const ResultComponent = () => {
    if (
      isAuthUser &&
      user?.roleName &&
      accessibleRoles.includes(user?.roleName)
    ) {
      const Component = componentList[user?.roleName];
      return Component();
    }

    if (
      isAuthUser &&
      user?.roleName &&
      !accessibleRoles.includes(user?.roleName)
    ) {
      return <ErrorPage code={403} />;
    }

    if (!isAuthUser) {
      return <ErrorPage code={403} />;
    }

    return <ErrorPage code={500} />;
  };
  return <Route {...rest} element={<ResultComponent />} />;
};
export default DynamicRouter;
