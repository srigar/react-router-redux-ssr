import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    // If we used Link tag then react router will work but we dont need that here, because we need to redirect to page.
    const authButton = this.props.authStatus ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authStatus: state.authStatus
});

export default connect(mapStateToProps)(Header);
