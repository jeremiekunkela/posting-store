import React from "react";
import { Login } from "./features/counter/Login";
import "./App.css";
import { selectUser } from "./features/counter/authSlice";
import { useSelector } from "react-redux";
import { Message } from "./features/message/Message";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <header className="App-header">
        {user?.value ? <Message /> : <Login />}
      </header>
    </div>
  );
}

export default App;
