import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Chatlist from "../components/Chatlist";
import Chatbox from "../components/Chatbox";
import "./Chatpage.css"; // Import CSS for styling

export default class Chatpage extends Component {
  componentDidMount() {
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="chat-container">
          <div className="chatlist">
            <Chatlist />
          </div>
          <div className="chatbox">
            <Chatbox />
          </div>
        </div>
      </div>
    );
  }
}
