import React, { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { userData } from "../helpers/userData";

const Login = () => {
  const { login } = useUserContext();

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { username, password } = loginData;

  const handleLogin = (e) => {
    e.preventDefault();
    const { data } = userData;
    if (username === data.email && password === data.first_name) {
      login();
    } else {
      alert("Error!");
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="row justify-content-center p-5">
      <h1 className="text-center mb-5">Login</h1>
      <form className="col-6 col-lg-4">
        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
