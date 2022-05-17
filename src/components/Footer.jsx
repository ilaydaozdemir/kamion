import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <div className="social">
          <a className="icon" href="#">
            <FaFacebook />
          </a>
          <a className="icon" href="#">
            <FaTwitter />
          </a>
        </div>
        <div className="brand">2021 Kamion Lojistik Teknolojileri A.Ş.</div>
      </FooterSection>
    </>
  );
};

export default Footer;

const FooterSection = styled.footer`
  text-align: center;
  padding-top: 0.35rem;
  .icon {
    font-size: 1.5rem;
    color: inherit;
    line-height: 1rem;
    display: inline-block;
    text-align: center;
    margin: 0 8px;
    opacity: 0.75;
    &:hover {
      opacity: 0.55;
    }
  }
  .brand {
    text-align: center;
    opacity: 0.75;
    margin-top: 0.25rem;
  }
`;
