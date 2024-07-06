import { useContext, useRef } from "react";
import "./login.css";
import { CircularProgress } from "@mui/material";
import { loginCall } from "../../apicalls";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log("isFetching:", isFetching); // Debugging log

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              required
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">
              {isFetching ? (
                <CircularProgress size={24} style={{ color: "white" }} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress size={24} style={{ color: "white" }} />
              ) : (
                " Create a New Account"
              )}{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
