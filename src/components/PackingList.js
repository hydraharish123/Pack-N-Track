import { useState } from "react";
import Item from "./Item.js";
export default function PackingList({
  items,
  onHandleDelete,
  onHandleToggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemObj) => (
          <Item
            item={itemObj}
            key={itemObj.id}
            onHandleDelete={onHandleDelete}
            onHandleToggle={onHandleToggle}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
