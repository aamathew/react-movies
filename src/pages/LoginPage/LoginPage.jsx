import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ setUser }) {
  const [inputVal, setInputVal] = useState("");

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(inputVal);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-head">Username</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" onChange={changeHandler} />
          <button className="submit-btn" type="submit">
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
}
