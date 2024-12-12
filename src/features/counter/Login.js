import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { add } from "./authSlice";
import styles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const fetchUser = async () => {
    const response = await fetch("/api/user");
    const status = response.status;
    if (status === 200) {
      dispatch(add(name));
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className={styles.button} onClick={() => fetchUser()}>
          Set name
        </button>
      </div>
    </div>
  );
}
