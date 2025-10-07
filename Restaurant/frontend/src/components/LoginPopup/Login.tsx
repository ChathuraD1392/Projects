import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/frontend_assets/assets";

interface Props {
  setShowLogin: (showLogin: boolean) => void;
}

const Login = ({ setShowLogin }: Props) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-header">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="close-button"
            />
          </div>
          <div className="login-popup-inputs">
            {currentState === "Sign up" ? (
              <input type="text" required placeholder="Name" />
            ) : (
              <></>
            )}

            <input type="email" required placeholder="Email" />
            <input type="password" required placeholder="Password" />
          </div>
          <button className="loginBtn">
            {currentState === "Sign up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-conditions">
            <input type="checkbox" required />
            <p>By continuing, I agree to accept the terms and conditions</p>
          </div>
          <div className="login-check">
            {currentState != "Sign up" ? (
              <p>
                Create a new Account?{" "}
                <span onClick={() => setCurrentState("Sign up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Log in")}>Login</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
