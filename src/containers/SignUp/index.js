import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import background from '../../assets/background-register.png';
import logo from '../../assets/viziotag-color.png';
import SocialLogin from "../../components/SocialLogin";
import SignInLink from "../../components/SignInLink";
import Privacy from "../../components/Privacy";


//default
import { createUser } from "./actions";

//utils
import * as routes from "../../utils/routes";
import "./SignUp.css";

const styles = theme => ({
  underline: {
    '&:hover': {
      '&:before': {
        borderBottom: ['rgba(0, 188, 212, 0.7)', '!important'],
      }
    },
    '&:before': {
      borderBottom: 'rgba(0, 188, 212, 0.7)',
    }
  }
})

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authUser !== null) {
      nextProps.history.push(routes.HOME);
    }
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.onCreateUser(email, username, passwordOne);
    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";
    
    return (
    <div className="register">
     <div className="row">
      <div className="col s7 m7 l7 SignUp">
          <div className="logo"><img src={logo} alt='Logo' style={{ width: "19%" }} /></div>
            <div className="col s12" style={{ paddingLeft: "11.250px" , textAlign: "center"}}>
              <h4 className="title">
                Sign Up
              </h4>
              <p className="grey-text">Use your email account for registration</p>
            </div>
         <form onSubmit={this.onSubmit}>
            <div>
              <TextField
                id="username"
                label="Name"
                className="textField"
                margin="normal"
                value={username}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("username", event.target.value)
                  )
                }
              />
            </div>
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
                id="passwordOne"
                label="Password"
                type="password"
                className="textField"
                inputProps={{style: {fontSize: 40}}}
                autoComplete="current-password"
                margin="normal"
                value={passwordOne}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("passwordOne", event.target.value)
                  )
                }
              />
            </div>
            <div>
              <TextField
                id="passwordtwo"
                label="Password"
                type="password"
                className="textField"
                autoComplete="current-password"
                margin="normal"
                value={passwordTwo}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("passwordTwo", event.target.value)
                  )
                }
              />
            </div>
            <Privacy />
            <div>
              <br />
              <Button
                variant="raised"
                color="default"
                size="large"
                disabled={isInvalid}
                className="submit"
                type="submit"
              >
                Sign Up
              </Button>

                            <SocialLogin
                signInWithGoogle={this.props.onSignInWithGoogle}
                signInWithFacebook={this.props.onSignInWithFacebook}
                signInWithTwitter={this.props.onSignInWithTwitter}
              />

            </div>
            <div className="error">{error && error.message}</div>
                      <SignInLink />
          </form>
      </div>
         <div className="col m5 s5 l5 responsive-img hide-on-small-only" style={{  
            backgroundImage: "url(" + background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '808px',
           }}>
                <div className="centered center-align"  style={{ margin: "auto" , width: "450px" , height: "100px", color: "white" , marginTop: "300px" , textAlign: "center" }}>
                <h3>Create an account</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
              </div>
           </div>
           </div>
           </div>
    );
  }
}
SignUp.propTypes = {
  onCreateUser: PropTypes.func
};

const mapStateToProps = state => ({
  authUser: state.app.authUser
});

const mapDispatchToProps = dispatch => ({
  onCreateUser: (email, username, password) =>
    dispatch(createUser(email, username, password))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);
