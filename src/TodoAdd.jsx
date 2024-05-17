import React from "react";
import styles from "./TodoAdd.module.css";

export default function TodoAdd({ newItem, setNewItem, addItem }) {
  return (
    <div className={styles.todo_add}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && addItem()}
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
      />
      <button type="submit" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
