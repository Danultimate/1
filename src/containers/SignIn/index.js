import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { compose } from "recompose";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//components
import SignUpLink from "../../components/SignUpLink";
import PasswordForgetLink from "../../components/PasswordForgetLink";
import SocialLogin from "../../components/SocialLogin";

import background from '../../assets/background-login.png';
import logo from '../../assets/viziotag-white.png';

//default
import {
  signIn,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  resetState
} from "./actions";

//utils
import { isUserLogin } from "../../utils/webhelper";
import * as routes from "../../utils/routes";
import "./SignIn.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillUnmount() {
    this.props.onResetState();
  }

  doSignInWithEmailAndPassword = event => {
    const { email, password } = this.state;
    this.props.onSignIn(email, password);
    event.preventDefault();
  };

  render() {
    if (isUserLogin()) {
      return <Redirect to={routes.HOME} />;
    }

    const { email, password } = this.state;
    const isInvalid = password === "" || email === "";
    return (
    <div>
    <div  className="row">
      <div className="col s6 m6 l5 hide-on-small-only" style={{  
            backgroundImage: "url(" + background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '698px',
           }}>
           <div><img src={logo} alt='Logo' style={{ width: "30%" }}/></div>
                         <div className="centered"  style={{ margin: "auto" , width: "450px" , height: "100px", color: "white" , marginTop: "200px" , textAlign: "center" }}>
                <h3 className="titlem">Welcome Back!</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
              </div>
           </div>
      <div className="col s6 m6 l7 SignIn centered">
          <form onSubmit={this.doSignInWithEmailAndPassword}>
            <h4 className="title">
               Log in
            </h4>
            <p className="grey-text">Use your email account</p>
            <div>
              <TextField
                id="email"
                label="Email Address"
                className="textField"
                margin="normal"
                value={email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                className="textField"
                autoComplete="current-password"
                margin="normal"
                value={password}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("password", event.target.value)
                  )
                }
              />
            </div>
             <div style={{ float: "left" }}>
               <label>
                <input type="checkbox" className="validate"/>
                <span>Keep me singed in</span>
              </label>
              </div>
                    <PasswordForgetLink />
            <div>
              <br />
              <Button
                variant="raised"
                color="#1b5266"
                size="large"
                disabled={isInvalid}
                className="submit"
                type="submit"
              >
                Log in
              </Button>
                          <div>
              <SocialLogin
                signInWithGoogle={this.props.onSignInWithGoogle}
                signInWithFacebook={this.props.onSignInWithFacebook}
                signInWithTwitter={this.props.onSignInWithTwitter}
              />
            </div>
            </div>
            <div className="error">
              {this.props.error && this.props.error.message}
            </div>
          </form>
        <SignUpLink />
      </div>
      </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  onSignIn: PropTypes.func,
  onSignInWithGoogle: PropTypes.func,
  onSignInWithFacebook: PropTypes.func,
  onSignInWithTwitter: PropTypes.func,
  authUser: PropTypes.object,
  err: PropTypes.object,
  onResetState: PropTypes.func
};

const mapStateToProps = state => ({
  authUser: state.app.authUser,
  error: state.signIn.err
});

const mapDispatchToProps = dispatch => ({
  onSignIn: (email, password) => dispatch(signIn(email, password)),
  onSignInWithGoogle: () => dispatch(signInWithGoogle()),
  onSignInWithFacebook: () => dispatch(signInWithFacebook()),
  onSignInWithTwitter: () => dispatch(signInWithTwitter()),
  onResetState: () => dispatch(resetState())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInPage);
