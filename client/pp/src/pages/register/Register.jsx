import React from "react";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
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
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Name"></input>
            <input type="password" placeholder="Password"></input>
            <input type="email" placeholder="Email"></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
