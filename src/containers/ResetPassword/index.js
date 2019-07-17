import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import background from '../../assets/background-forgot.png';
import logo from '../../assets/viziotag-white.png';

//components
import SignUpLink from "../../components/SignUpLink";

//utils
import "./ResetPassword.css";
import { resetPassword } from "./actions";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;
    this.props.onResetPassword(email);
    this.setState(() => ({ ...INITIAL_STATE }));
    event.preventDefault();
  };

  render() {
    const { email } = this.state;
    const isInvalid = email === "";
    return (
      <div>
        <div className="row">
          <div className="col s5 hide-on-small-only" style={{  
            backgroundImage: "url(" + background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '698px',
           }}>
           <div><img src={logo} alt='Logo' style={{ width: "30%" }}/></div>
                         <div className="centered"  style={{ margin: "auto" , width: "450px" , height: "100px", color: "white" , marginTop: "220px" , textAlign: "center" }}>
                <h3 style={{ fontFamily: "Raleway" , fontWeight: "500" }}>Dont Worry!</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
              </div>
           </div>
      <div className="ResetPassword">
          <form onSubmit={this.onSubmit}>
                <h4 style={{ color: "#0ac4e2" , fontFamily: "Raleway" , fontWeight: "500" }}>Forgot your password</h4>
                 <p className="grey-text" style={{ fontSize: "14px" }}>
                Enter your email account below to receive <br />your password reset instruccions
              </p>
            <div>
              <TextField
                id="usernamef"
                label="Email Address"
                className="textField"
                margin="normal"
                value={this.state.email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </div>
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
                Reset my password
              </Button>
            </div>
            <div className="error">
              {this.props.error && <p>{this.props.error.message}</p>}
            </div>
          </form>
        <SignUpLink />
      </div>
      </div>
      </div>
    );
  }
}
ResetPassword.propTypes = {
  onResetPassword: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onResetPassword: email => dispatch(resetPassword(email))
});

const mapStateToProps = state => ({
  authUser: state.app.authUser,
  error: state.resetPassword.err
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ResetPassword);
