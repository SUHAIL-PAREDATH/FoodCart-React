import React, { useState } from "react";

function User(props) {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>Name :{name}</h2>
      <h3>Location :{location}</h3>
      <h4>Contact : affsas</h4>
    </div>
  );
}

export default User;
