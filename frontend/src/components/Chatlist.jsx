import React, { Component } from "react";
import Searchbar from "../components/Searchbar";

export default class Chatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPatient: false,
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.role === "Patient") {
      this.setState({ isPatient: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.isPatient && <Searchbar />}
        {/* Other chat list components can go here */}
      </div>
    );
  }
}
