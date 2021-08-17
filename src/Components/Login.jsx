import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img src="https://www.cnm.edu/depts/mco/marketing/images/linkedin-logo.png/@@images/image.jpeg" />
      <form>
        <input
          placeholder="Full name (required if registering)"
          type="text"
        ></input>
      </form>
    </div>
  );
}

export default Login;
