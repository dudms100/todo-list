import React from "react";
import styles from "./TodoList.module.css";

export default function TodoList({ items, deleteItem, toggleComplete }) {
  return (
    <div className={styles.todo_list}>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? styles.completed : ""}>
            <input
              id={`li${item.id}`}
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <label htmlFor={`li${item.id}`}>{item.text}</label>
            <button type="button" onClick={() => deleteItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
