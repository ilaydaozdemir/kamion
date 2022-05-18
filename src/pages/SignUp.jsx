import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import signUpBackground from "../assets/SignupBc.jpg";
import httpClient from "../http-client";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState(null);

  const submit = () => {

    const data = { username, password, first_name, last_name, phone, email };
    httpClient
      .post("/api/shipper/register", data)
      .then((response) => {
        setErrors(null);
        alert("Sign Up completed");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <SignUpForm className="signupForm">
      <div className="background">
        <img src={signUpBackground} alt="" />
      </div>
      <div className="form">
        <div className="signup">
          <h1 className="title">sign up</h1>
          <div>
            <div>
              {" "}
              <label className="text" htmlFor="text">
                Username
              </label>
              <br />
              <input
                value={username}
                className="input"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="error-container">
                {errors?.username && <p>{errors.username.join(',')}</p>}
              </div>
            </div>
            <div>
              {" "}
              <label className="password" htmlFor="password">
                Password
              </label>
              <br />
              <input
                value={password}
                className="input"
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="error-container">
                {errors?.password && <p>{errors.password.join(',')}</p>}
              </div>
            </div>
            <div>
              <label className="firstname" htmlFor="fname">
                Fisrt Name
              </label>
              <br />
              <input
                value={first_name}
                className="input"
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="error-container">
                {errors?.first_name && <p>{errors.first_name.join(',')}</p>}
              </div>
            </div>
            <div>
              <label className="lastname" htmlFor="lname">
                Last Name
              </label>
              <br />
              <input
                value={last_name}
                className="input"
                type="text"
                id="lname"
                name="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="error-container">
                {errors?.last_name && <p>{errors.last_name.join(',')}</p>}
              </div>
            </div>
            <div>
              {" "}
              <label className="text" htmlFor="text">
                Phone
              </label>
              <br />
              <input
                value={phone}
                className="input"
                type="tel"
                placeholder="90XXXXXXXXXX"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="error-container">
                {errors?.phone && <p>{errors.phone.join(',')}</p>}
              </div>
            </div>
            <div>
              {" "}
              <label className="email" htmlFor="email">
                Email
              </label>
              <br />
              <input
                value={email}
                className="input"
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error-container">
                {errors?.email && <p>{errors.email.join(',')}</p>}
              </div>
            </div>

            <input
              className="submit"
              type="submit"
              value="Submit"
              onClick={submit}
            />
          </div>
        </div>
      </div>
    </SignUpForm>
  );
};

export default SignUp;
const SignUpForm = styled.div`
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
    .signup {
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
        background-color: #b27aba;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #813b8c;
        }
      }
    }
  }
`;
