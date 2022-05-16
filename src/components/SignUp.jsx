import React from "react";
import styled from "styled-components";
import signUpBackground from "../assets/SignupBc.jpg";

const SignUp = () => {
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
              <input className="input" type="text" />
            </div>
            <div>
              {" "}
              <label className="text" htmlFor="text">
                Phone
              </label>
              <br />
              <input
                className="input"
                type="tel"
                placeholder="90XXXXXXXXXX"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label className="firstname" htmlFor="fname">
                Fisrt Name
              </label>
              <br />
              <input className="input" type="text" id="fname" name="fname" />
            </div>
            <div>
              <label className="lastname" htmlFor="lname">
                Last Name
              </label>
              <br />
              <input className="input" type="text" id="lname" name="lname" />
            </div>
            <div>
              {" "}
              <label className="email" htmlFor="email">
                Email
              </label>
              <br />
              <input className="input" type="email" id="email" name="email" />
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
