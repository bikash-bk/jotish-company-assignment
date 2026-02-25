import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if(username === "testuser" && password === "Test123"){
      navigate("/list");
    }else{
      alert("Invalid Login");
    }
  };

  return (
    <div className="login-main">
      <div className="login-box">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}