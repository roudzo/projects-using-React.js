import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [newlist, setNewList] = useState([]);

  function handleChange(event) {
    const itemName = event.target.value;
    setItem(itemName);
  }

  function addItem() {
    setNewList((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newlist.map((list) => (
            <li>{list} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
