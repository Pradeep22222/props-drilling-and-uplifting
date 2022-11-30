import React, { useState } from "react";

export const Form = ({ adduser }) => {
  const [val, upVal] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    upVal(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    adduser(val);
  };
  return (
    <div>
      <h1>User Form</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <p>
          <input onChange={onChange}></input>
        </p>
        <p>
          <button type="submit">Add user</button>
        </p>
      </form>
    </div>
  );
};
