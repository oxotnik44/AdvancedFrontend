import { useState } from "react";
import styles from "./styles.module.scss";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.button}>
      <p>{count}</p>
      <button onClick={increment}>Прибавить</button>
    </div>
  );
};
