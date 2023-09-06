import React from "react";

const Signin = () => {
  console.log("signin");
  return (
    <div>
      <h1>Login</h1>
      <h5>Enter Your Account Login Details.</h5>
      <div>
        <div>
          <input placeholder="Enter Username or Email" />
        </div>
        <div>
          <input placeholder="Password" />
        </div>
        <div>
          <button>Signin</button>
        </div>
        <div>Don't you have an account? Sign up</div>
      </div>
    </div>
  );
};

export default Signin;
