import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  // Creted three use states to know the input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  // Have cases with respect to input fields
  const register = () => {
    if (!name) {
      return alert("Please enetr a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  const loginToApp = (e) => {
    e.preventDefault(); // Don't want it to refresh

    auth;
  };
  return (
    <div className="login">
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="text"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
