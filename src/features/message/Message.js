import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./messageSlice";
import { useSelector } from "react-redux";
import { selectMessage } from "./messageSlice";

export function Message() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const messages = useSelector(selectMessage);

  return (
    <div>
      {messages?.map((message, index) => {
        return <div key={index}>{message}</div>;
      })}
      <input
        aria-label="Set message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={() => dispatch(add(message))}>Add message</button>
    </div>
  );
}
