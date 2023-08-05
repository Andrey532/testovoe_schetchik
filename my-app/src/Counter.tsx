import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [value, setValue] = useState(0);
  const onClickInc = () => {
    setValue(value + 1);
    if (value > 6) {
      setValue(7);
    }
  };
  const onClickReset = () => {
    setValue(0);
  };
  return (
    <div className={styles.main}>
      <div className={styles.num}>
        <span className={value === 7 ? styles.maxValCol : ""}>{value}</span>
      </div>
      <div className={styles.btns}>
        <button className={styles.btnInc} onClick={onClickInc}>
          inc
        </button>
        <button className={styles.btnReset} onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
