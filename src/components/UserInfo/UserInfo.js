import React, {Component} from "react";

class UserInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    const username = this.props.match.params.username;
  }

  render() {
    return (
      <div>User</div>
    )
  }
}

export default UserInfo;