import React from "react";
import styled from "styled-components";
import { hero } from "../assets";
import { Title, Paragraf, ButtonLink } from "../styled";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Container>
      <HeroSection>
        <InnerContainer>
          <Title>
            "Experience the Ultimate Comfort at Vlorë's Premier Apartments
            Hotel"
          </Title>
          <Paragraf>
            Luxurious amenities, spacious rooms, and breathtaking views await
            you in this prime location. Discover the epitome of comfort and
            relaxation in Vlorë, Albania.
          </Paragraf>
          <Link to={`/apartments`}></Link>
          <ButtonLink href="/apartments">Book An Apartment</ButtonLink>
        </InnerContainer>
      </HeroSection>
    </Container>
  );
}

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
  @media (max-width: 800px) {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
