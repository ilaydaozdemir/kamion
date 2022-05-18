import React, { useState } from "react";
import styled from "styled-components";
import homeImage from "../assets/Home.jpg";

const Home = () => {
  return (
    <>
      {" "}
      <Section id="home">
        <div className="background">
          <img src={homeImage} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1>Kamion ile sorunsuz taşımacılık</h1>
            <p>
              Kamion sayesinde şirketinin FTL taşıma ihtiyaçları için anında
              fiyat al, süreçlerini hızlandır, güvenilir yük taşıyanlar ile
              çalış.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    img {
      width: 100%;
      filter: brightness(30%);
      border-radius: 16px;
      height: 80vh;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 1.8rem;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        letter-spacing: 0.1rem;
        margin-top: 1.5rem;
        font-size: 1.2rem;
      }
    }
    @media screen and (min-width: 280px) and (max-width: 960px) {
      h1 {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
      }
      p {
        text-align: center;
        padding: 0 20vw;
        letter-spacing: 0.1rem;
        margin-top: 1.2rem;
        font-size: 1rem;
      }
    }
  }
`;
