import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/index";

class Users extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers();
  }
  render() {
    const { users = [] } = this.props;
    return (
      <div>
        <h4>Users</h4>
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
};
