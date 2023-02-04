import React from "react";
import styled from "styled-components";
import { Title, Paragraf, ButtonLink } from "../styled";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export function Hero(props) {
  const Container = styled.div`
    height: 90vh;
  `;

  const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    max-height: 80%;
  `;

  const HeroSection = styled.section`
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-image: url("${(props) => props.imgHero}");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 3px;
    @media (max-width: 800px) {
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  `;

  return (
    <Container key={id}>
      <HeroSection imgHero={props.imgHero}>
        <InnerContainer>
          <Title>{props.title}</Title>
          <Paragraf>{props.paragraf}</Paragraf>
          {props.buttonDir ? (
            <Link to={`${props.buttonDir}`}>
              <ButtonLink>{props.buttonTitle}</ButtonLink>
            </Link>
          ) : null}
        </InnerContainer>
      </HeroSection>
    </Container>
  );
}
