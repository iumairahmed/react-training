import React, { Component } from "react";
import "./Input.scss";

class Input extends Component {
  render() {
    return <input placeholder={this.props.placeholder} />;
  }
}
export default Input;
