import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  getUsers(id) {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        // console.log(res.data)
        this.setState({ userList: res.data });
      });
  }
  render() {
    const { userList } = this.state;
    return (
      <div>
        <h2>This is Home page</h2>
        <div>
          User list: {userList.id} name:{userList.name}
        </div>
      </div>
    );
  }
}
