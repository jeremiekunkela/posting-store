import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { add } from "./authSlice";
import styles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className={styles.button} onClick={() => dispatch(add(name))}>
          Set name
        </button>
      </div>
    </div>
  );
}
