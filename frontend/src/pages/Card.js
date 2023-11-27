import React from "react";

function Card(props) {
  const list = props.list;
  return (
    <div>
      <div key={list._id}>
        <div>{list.name}</div>
        <div>{list.email}</div>
        <div>{list.department}</div>
        <div>{list.role}</div>
      </div>
    </div>
  );
}

export default Card;
