import React from "react";
import styled from "styled-components";
import { carouselImg10 } from "../assets";

export function CarouselPlaces() {
  return (
    <Container>
      <CarouselSection>CarouselPlaces</CarouselSection>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
`;

const CarouselSection = styled.section`
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-image: url("${carouselImg10}");
  background-size: cover;
  background-position: center;
  position: absolute;
  right: 0;
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
