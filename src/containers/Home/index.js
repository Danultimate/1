import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

//components
import withAuthorization from "../../components/Session/withAuthorization";

//internals
import { setUsers, setInitialState } from "./actions";

//utils
import { db, auth } from "../../firebase";
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    if (auth.currentUser !== null) {
      this.onceGetUsers().then(snapshot =>
        this.props.onSetUsers(snapshot.val())
      );
    }
  }

  componentWillUnmount() {
    //perform clean-up
    this.props.onSetInitialState();
  }

  onceGetUsers = () => {
    return db.ref("users").once("value");
  };

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.home.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch(setUsers(users)),
  onSetInitialState: () => dispatch(setInitialState())
});

export default compose(
  withAuthorization(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
