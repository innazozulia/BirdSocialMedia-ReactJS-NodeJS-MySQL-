import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/auth/register", inputs);
    } catch (error) {
      setError(error.response.data);
    }
  };

  // console.log(error);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            fugiat necessitatibus vitae sint praesentium et modi libero
            veritatis?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}></input>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}></input>
            {error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
