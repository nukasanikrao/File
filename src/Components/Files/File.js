import axios from "axios";
import React, { Component } from "react";

export default class file extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      userDetails: {},
      name: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    // this.getUser(3); // GET Method to call single details
    this.getUsers(); //GET Method
    // this.postTodo(); // POST Method
    // this.putTodo();
    // this.deleteUser()
  }

  getUser = (id) => {
    axios.get("https:jsonplaceholder.typicode.com/users" + id).then((res) => {
      this.setState({ userDetails: res.data });
    });
  };

  getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log(res.data)
      this.setState({ userList: res.data });
    });
  }

  postUsers(data) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "your token",
      "my-header": "This is my header",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", data, { headers })
      .then((res) => {
        this.getUsers();
        this.setState({ name: "", email: "", password: "" });
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  }

  handleForm = (e) => {
    // console.log(e.target, e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    // console.log(this.state)
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.postUsers(data);
  };

  deleteHandler = (id) => {
    console.log("UserID", id);
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        this.getUsers();
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  editHandler = (id) => {
    id.preventDefault();
    const newItem = this.state;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        userDetails: this.userDetails,
      });
    }
    console("edited");
  };
  render() {
    const { userList, userDetails, name, email, password } = this.state;
    return (
      <div>
        <div>
          User detials: {userDetails.id} {userDetails.name}
        </div>
        <div>
          <ul>
            {userList &&
              userList.map((user) => (
                <li key={user.id}>
                  {user.id} {user.name}
                  <button onClick={() => this.editHandler(user.id)}>
                    Edit
                  </button>
                  <button onClick={() => this.deleteHandler(user.id)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => this.handleForm(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => this.handleForm(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => this.handleForm(e)}
          />
          <button onClick={() => this.submitHandler()}>Submit</button>
        </div>
      </div>
    );
  }
}
