import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../utils/routes";

const Privacy = () => (
     <p>By singning up I agree with <Link to={routes.PRIVACY}>terms and conditions</Link></p>
);

export default Privacy;