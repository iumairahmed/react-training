import React, { Component } from "react";

class Label extends Component {
  render() {
    return (
        <label style={this.props.style} >{this.props.label}</label>
    );
  }
}
export default Label;
