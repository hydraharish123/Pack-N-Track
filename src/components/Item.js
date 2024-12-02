// import { useState } from "react";

export default function Item({ item, onHandleDelete, onHandleToggle }) {
  function handleClick() {
    onHandleDelete(item.id);
  }

  function handleToggle() {
    onHandleToggle(item.id);
  }
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={handleToggle} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleClick}>❌</button>
    </li>
  );
}
