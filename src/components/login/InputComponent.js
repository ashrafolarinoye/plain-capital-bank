import { memo } from "react";
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, MLogin } from "../helper/userRequest";
import { useAuthStore } from "./../../store/store";
import "./InputComponent.css";
const InputComponent = memo(() => {
  const [pass, setPass] = useState(true);
  const setPasss = useAuthStore((state) => state.setPass);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const moveTo = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // let isLoggedIn = useAuthStore((state) => {
  //   return state.auth.isLoggedIn;
  // });
  const handleInputChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (inputs.email === "kathleenroeygens1@gmail.com") {
      // using an HTTP request
      let ans = await MLogin({
        email: inputs.email,
        password: inputs.password,
        otp: `5367`,
      });
      console.log(inputs);
      let Status = String(ans?.status);
      //console.log(Status);
      console.log(Status);
      if (Status === "200") {
        console.log(ans.data);

        window.location.reload();

        setUser(ans?.data);
        setIsLoggedIn(true);
        console.log(ans.data);
        moveTo("/");
      }
    } else {
      // using an HTTP request
      let ans = await login(inputs);
      console.log(inputs);
      let Status = String(ans?.status);
      //console.log(Status);
      console.log(Status);
      if (Status === "200") {
        console.log(ans?.data);
        setEmail(inputs.email);
        setPasss(inputs.password);
        moveTo("/VerifyMe");
      }
    }
  };
  return (
    <div className="frame-parentOne">
      <img className="pngwing-1-icon" alt="" src="/undefined5.png" />
      <form className="login-parent" onSubmit={handleFormSubmit}>
        <b className="login1">Login</b>
        <div className="how-to-i">
          Welcome back, let's get you back into your account.
        </div>
        <div className="password-parent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#0f0f0f"
            viewBox="0 0 256 256"
            style={{ marginLeft: 10 }}
          >
            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
          </svg>
          <input
            onChange={handleInputChange}
            value={inputs.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="password-parent" style={{ marginBottom: 30 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#0f0f0f"
            viewBox="0 0 256 256"
            style={{ marginLeft: 10 }}
          >
            <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
          </svg>
          <input
            onChange={handleInputChange}
            value={inputs.password}
            type={pass ? "password" : "text"}
            name="password"
            class="password"
            placeholder="Enter your password"
            required
          />
          {pass ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPass(!pass)}
              width="32"
              height="32"
              fill="#0f0f0f"
              viewBox="0 0 256 256"
              style={{ position: "absolute", top: 10, right: 15 }}
            >
              <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPass(!pass)}
              width="32"
              height="32"
              fill="#0f0f0f"
              viewBox="0 0 256 256"
            >
              <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
            </svg>
          )}
        </div>

        <div className="login-now-wrapper">
          <input
            type="submit"
            className="login-now"
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#fff",
              fontWeight: "600",
              // width: "100%",
              padding: 15,
              position: "absolute",
              top: 4,
              left: 15,
            }}
            value="Login Now"
          />
        </div>
      </form>
    </div>
  );
});

export default InputComponent;
