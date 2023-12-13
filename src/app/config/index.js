import React, { Fragment, useContext } from "react";
import AppContext from "../AppContext";
import { useRoutes } from "react-router-dom";

const Layout = () => {
 
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <Fragment>
      {useRoutes(routes)}
    </Fragment>
  );
};

export default Layout;
