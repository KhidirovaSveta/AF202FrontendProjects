import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  let allUsersArray = JSON.parse(localStorage.getItem("users"));
  const handleSignUp = () => {
    allUsersArray.some(
      (q) =>
        q.userName == userNameRef.current.value &&
        q.password == passwordRef.current.value
    )
      ? navigate("../users")
      : alert("Username or password wrong");
  };

  return (
    <div className="container">
      <div className="form-box">
        <form action="">
          <h1> Sign In </h1>
          <div className="username">
            <div className="usnam">
              <label htmlFor="userName">
                <i className="fa-solid fa-user"></i>Username
              </label>
            </div>
            <input
              id="userName"
              name="userName"
              type="text"
              ref={userNameRef}
            />
          </div>
          <div className="password">
            <div className="pass">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>Password
              </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              ref={passwordRef}
            />
          </div>
          <div className="btn">
            {/* <button> Sign In </button> */}

            <button onClick={() => handleSignUp()}> Sign In </button>

            <p>
              {" "}
             Not a member? <a href="/"> Sign Up </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
