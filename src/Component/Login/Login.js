import React, { useState } from "react";
import HomePage from "../../Pages/HomePage";
import "./login.css";

function Login(props) {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [log,setLog] = useState(props.log);

  const handleSubmit = () => {
    if(input === "Scada" && password === "admin123"){
        setLog(true);
    }
  };

  return (
    
    log ? <HomePage />
    :
    <div className="login-form">
      <div class="container">
        <h1>Login to Scada</h1>
        <label for="email">
          <input
            type="email"
            id="email"
            placeholder="Username"
            onInput={(e) => setInput(e.target.value)}
            required
          />
        </label>
        <label for="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label for="submit">
          <input
            type="submit"
            id="submit"
            value="Login"
            onClick={handleSubmit}
          />
        </label>
      </div>
    </div>    
  );
}

export default Login;
