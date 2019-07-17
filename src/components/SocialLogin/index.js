import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import * as routes from "../../utils/routes";
import googleIcon from "../../assets/google.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import "./SocialLogin.css";

const Rule = ({ color }) => (
  <hr
    style={{
      borderColor: "rgb(10, 196, 226)",
      width: "150px",
      marginLeft: "20px",
      marginRight: "20px",
    }}
  />
);

class SocialLogin extends Component {
  signOut = event => {
    this.props.doSignOut().then(result => {
      this.props.history.push(routes.SIGN_IN);
    });
  };

  render() {
    return (
      <div>
      <div>
        <p>Or use</p>
        <br />
      </div>
      <div className="SocialLogin">
      <Rule />
        <img
          src={googleIcon}
          alt="google"
          onClick={this.props.signInWithGoogle}
        />
        <img
          src={facebookIcon}
          alt="facebook"
          onClick={this.props.signInWithFacebook}
        />
        <img
          src={linkedinIcon}
          alt="linkedin"
          onClick={this.props.signInWithTwitter}
        />
        <Rule />
      </div>
      </div>
    );
  }
}

SocialLogin.propTypes = {
  signInWithGoogle: PropTypes.func,
  signInWithFacebook: PropTypes.func,
  signInWithTwitter: PropTypes.func
};

export default withRouter(SocialLogin);
