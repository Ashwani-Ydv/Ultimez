import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <h1>Login</h1>
      <h5>Enter Your Account Login Details.</h5>
      <div>
        <div>
          <input placeholder="Enter Username or Email" type="email" />
        </div>
        <div>
          <input placeholder="Password" type="password" />
        </div>
        <div>
          <Link to="/dashboard">
            <button>Signin</button>
          </Link>
        </div>
        <div>
          Don't you have an account?
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
