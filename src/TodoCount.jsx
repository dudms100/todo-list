import React from "react";
import styles from "./TodoCount.module.css";

export default function TodoCount({ totalItems, isComplete }) {
  return (
    <div className={styles.todo_cnt}>
      <p>
        완료: {isComplete} / 할 일: {totalItems}
      </p>
    </div>
  );
}
