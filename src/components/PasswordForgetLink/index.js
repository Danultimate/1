import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../utils/routes";

const PasswordForgetLink = () => (
  <p className="forgot">
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetLink;
