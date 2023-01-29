import React from "react";
import styled from "styled-components";
import { hero } from "../assets";

export function Hero() {
  return (
    <Container>
      <HeroSection>Hero</HeroSection>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
`;
const HeroSection = styled.section`
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-image: url("${hero}");
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
  @media (max-width: 600px) {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
