import React from "react";
import styled from "styled-components";
import loginBackground from "../assets/loginBc.jpg";

const Login = () => {
  return (
    <LoginForm className="loginForm">
      <div className="background">
        <img src={loginBackground} alt="" />
      </div>
      <div className="form">
        <div className="login">
          <h1 className="title">Login</h1>
          <div>
            {" "}
            <label className="text" htmlFor="text">
              Username
            </label>
            <br />
            <input className="input" type="text" />
          </div>
          <div>
            {" "}
            <label className="password" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="input"
              type="password"
              id="password"
              name="password"
            />
          </div>

          <input className="submit" type="submit" value="Submit" />
        </div>
      </div>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    img {
      width: 100%;
      filter: brightness(90%);
      border-radius: 16px;
      height: 80vh;
    }
  }
  .form {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 3rem;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    .login {
      .title {
        color: white;
        letter-spacing: 0.4rem;
        padding-bottom: 2rem;
        text-transform: uppercase;
      }
      color: white;
      font-size: large;

      .input {
        padding: 0.3rem;
        border-radius: 0.3rem;
        border: none;
      }
      .submit {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
`;
