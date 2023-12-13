import React, { useLayoutEffect, useState } from "react";
import history from "../history/browserHistory";
import { Router } from "react-router-dom";
import PropTypes from "prop-types";

function BrowserRouter({ basename, children }) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), []);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

BrowserRouter.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default BrowserRouter;
