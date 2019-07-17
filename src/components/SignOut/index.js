import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

class SignOutButton extends Component {
  render() {
    return (
      <Button
        variant="raised"
        color="default"
        type="button"
        onClick={this.props.doSignOut}
      >
        Sign Out
      </Button>
    );
  }
}

SignOutButton.propTypes = {
  doSignOut: PropTypes.func
};

export default SignOutButton;
