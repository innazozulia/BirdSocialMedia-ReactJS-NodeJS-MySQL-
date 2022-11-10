import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = React.useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            fugiat necessitatibus vitae sint praesentium et modi libero
            veritatis?
          </p>
          <span>Don`t have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
