import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

//containers
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import ResetPassword from "../ResetPassword";
import HomePage from "../Home";
import AccountPage from "../Account";

//utils
import * as routes from "../../utils/routes";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});

class App extends React.Component {
  includeNavigation = () => {
    const { pathname } = this.props.location;
    return !pathname.includes(routes.SIGN_IN) ? true : false;
  };

  render() {
    const showNav = this.includeNavigation();
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className="app">
            {showNav && <Navigation />}
            <main>
              <Switch>
                <Route exact path={routes.LANDING} component={LandingPage} />
                <Route exact path={routes.SIGN_UP} component={SignUpPage} />
                <Route exact path={routes.SIGN_IN} component={SignInPage} />
                <Route
                  exact
                  path={routes.PASSWORD_FORGET}
                  component={ResetPassword}
                />
                <Route exact path={routes.HOME} component={HomePage} />
                <Route exact path={routes.ACCOUNT} component={AccountPage} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.app.authUser
});

export default compose(withRouter, connect(mapStateToProps))(App);
