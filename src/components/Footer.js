import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faAirbnb,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export function Footer({ homePage }) {
  return (
    <FooterContainer homePage={homePage}>
      <SocialIcons>
        <p>Follow Us</p>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.airbnb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faAirbnb} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://github.com/Vasileios1314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </SocialIcons>
      <Links>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About Us</Link>
      </Links>
      <FooterText>
        &copy; {new Date().getFullYear()} All rights reserved
      </FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #333, #555);
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 46px;
  ${(props) => (props.homePage ? "position: relative;" : "position: absolute;")}
  width: 100%;
  bottom: 0px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  & > * {
    margin: 0 10px;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
  }

  & > *:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #bd2323;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  & > a {
    text-decoration: none;
    color: #fff;
    margin: 0 20px;
    transition: all 0.3s ease-in-out;
  }

  & > a:hover {
    color: #bd2323;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    padding-top: 10px;
  }
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 0.7rem;
  @media (max-width: 800px) {
    padding-top: 10px;
  }
`;
