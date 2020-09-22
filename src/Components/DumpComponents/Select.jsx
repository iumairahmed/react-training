import React, { Component } from "react";
//import "./Input.scss";

class Select extends Component {
  render() {
      debugger;
    const [id, text] = (this.props.data && this.props.data.length) > 0 ? Object.keys(this.props.data[0]): '';
    const options =
      this.props.data && this.props.data.length > 0 ? (
        this.props.data.map((d) => (
          <option key={d[id]} value={d[id]}>{d[text]}</option>
        ))
      ) : (
        <option key="0">${this.props.placeholder}</option>
      );

    return <select>{options}</select>;
  }
}
export default Select;
