import React, { useEffect } from "react";
import styled from "styled-components";
import { carouselImg13 } from "../assets";

export function About({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);

  const OuterContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 90vh;
    padding: 8rem;
    text-align: center;
    color: #333;
    background: url("${carouselImg13}") center/cover no-repeat;
    background-size: cover;

    @media (max-width: 800px) {
      height: 100vh;
    }
  `;

  const Container = styled.div`
    text-align: center;
    padding: 2rem;
    color: #333;
    background: rgba(255, 255, 255, 0.8) none repeat scroll 0 0;
    border-radius: 10px;
    margin: 2rem auto;
    max-width: 800px;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.6);
    @media (max-width: 800px) {
      padding: 1rem;
      width: 10rem;
      height: 30rem;
    }
  `;

  const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #1f5582;
    @media (max-width: 800px) {
      font-size: 1rem;
      margin-bottom: 0;
    }
  `;

  const SubTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #1f5582;
    @media (max-width: 800px) {
      font-size: 1.1rem;
      margin-bottom: 0.1rem;
    }
  `;

  const Paragraph = styled.p`
    font-size: 1.3rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    @media (max-width: 800px) {
      font-size: 0.6rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
  `;

  return (
    <OuterContainer>
      <Container>
        <Title>Visit Albania</Title>
        <Paragraph>
          Albania is a beautiful country with a rich history and culture. The
          stunning natural scenery, including pristine beaches and towering
          mountains, will leave you in awe.
        </Paragraph>
        <SubTitle>Discover Vlore</SubTitle>
        <Paragraph>
          Vlore is a charming city located on the Albanian coast. With its
          stunning beaches and warm, sunny weather, it's the perfect destination
          for a relaxing getaway. Whether you're a fan of history, culture, or
          just soaking up the sun, you'll love exploring this vibrant city.
        </Paragraph>
        <SubTitle>Experience Hospitality</SubTitle>
        <Paragraph>
          Our hotel's hosts are truly dedicated to making your stay as enjoyable
          as possible. Their warm and friendly hospitality will make you feel at
          home, and their attention to detail will ensure that your visit to
          Albania is truly unforgettable. Come and experience the best in
          hospitality at our hotel!
        </Paragraph>
      </Container>
    </OuterContainer>
  );
}
