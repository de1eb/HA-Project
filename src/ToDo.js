import React from 'react';
import UserList from './UserList'
import { Link } from "react-router-dom";


class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: {},
      isUserSelected: false
    }
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }

  handleUserSelect(event) {
    for (let user of this.props.users) {
      if (user.id === event.target.key) {
        this.setState({
          userSelected: user,
          isUserSelected: true
        })
      }
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>뒤로가기</div>
        <UserList users={this.props.users} handlePersonalPage={this.props.handlePersonalPage} handleUserSelect={this.props.handleUserSelect} />
      </div>
    )
  }
}

export default ToDo;