import React, { useState } from "react";
import styles from "./App.module.css";
import TodoCount from "./TodoCount";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [idCount, setIdCount] = useState(1); // State to manage unique IDs

  const totalItems = items.length;
  const isComplete = items.filter((item) => item.completed).length;

  const addItem = (id, text) => {
    setItems([...items, { id, text, completed: false }]);
    setIdCount(idCount + 1); // Increment ID count
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount totalItems={totalItems} isComplete={isComplete} />
      <TodoAdd
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
        nextId={idCount}
      />
      <TodoList
        items={items}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
