import axios from "axios";
import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Login.css";
import { StoreContext } from "../../assets/context/StoreContext";

interface Props {
  setShowLogin: (showLogin: boolean) => void;
}

const Login = ({ setShowLogin }: Props) => {
  const { url, setToken } = useContext(StoreContext)!;
  const [currentState, setCurrentState] = useState("Signup");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onLogging = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    }
    if (currentState === "Signup") {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <div className="login-popup">
        <form onSubmit={onLogging} className="login-popup-container">
          <div className="login-popup-header">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="close-button"
            />
          </div>
          <div className="login-popup-inputs">
            {currentState === "Signup" ? (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                required
                placeholder="Name"
              />
            ) : (
              <></>
            )}

            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              required
              placeholder="Email"
            />
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="loginBtn">
            {currentState === "Signup" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-conditions">
            <input type="checkbox" required />
            <p>By continuing, I agree to accept the terms and conditions</p>
          </div>
          <div className="login-check">
            {currentState != "Signup" ? (
              <p>
                Create a new Account?{" "}
                <span onClick={() => setCurrentState("Signup")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Login")}>Login</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
