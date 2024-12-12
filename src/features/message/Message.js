import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./messageSlice";
import { useSelector } from "react-redux";
import { selectMessage } from "./messageSlice";
import axios from "axios";

export function Message(user) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const messages = useSelector(selectMessage);
  const nowDate = new Date();

      const postMessage = async () => {
        const response = await axios.post("http://191.96.231.123:8085/message", 
           { body: message, user: {userName: user.user.value}, date: nowDate },
        );
        return response;
      };

      const getAllMessages = async () => {
        const response = await axios.get("http://191.96.231.123:8085/message/all", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const {status, data} = response;
        if (status === 200) {
          dispatch(add(data));
        }
      };
      useEffect(() => {
       getAllMessages();
      }, []);

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
      

      <button onClick={() => postMessage()}>Add message</button>
    </div>
  );
}
