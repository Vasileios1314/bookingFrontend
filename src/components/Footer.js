import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faAirbnb,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

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
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    color: #fff;
    margin: 0 20px;
    transition: all 0.3s ease-in-out;
  }

  & > a:hover {
    color: lightblue;
    cursor: pointer;
  }
`;

const FooterText = styled.div`
  text-align: center;
`;

export function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faAirbnb} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
      </SocialIcons>
      <Links>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
      </Links>
      <FooterText>
        &copy; {new Date().getFullYear()} All rights reserved
      </FooterText>
    </FooterContainer>
  );
}
