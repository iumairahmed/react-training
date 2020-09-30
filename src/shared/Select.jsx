import React from "react";

function Select(props) {
  const [id, text] =
    (props.data && props.data.length) > 0
      ? Object.keys(props.data[0])
      : "";
  const options =
    props.data && props.data.length > 0 ? (
      props.data.map((d) => (
        <option key={d[id]} value={d[id]}>
          {d[text]}
        </option>
      ))
    ) : (
      <option key="0">${props.placeholder}</option>
    );

  return <select value={props.value} onChange={props.onChange}>{options}</select>;
}
export default Select;
