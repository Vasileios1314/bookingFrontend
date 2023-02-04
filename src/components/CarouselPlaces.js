import React, { useState } from "react";
import styled from "styled-components";
import {
  carouselImg3,
  carouselImg16,
  carouselImg12,
  carouselImg17,
} from "../assets";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export function CarouselPlaces() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <CarouselContainer>
        <Carousel
          keyboard
          touch
          wrap
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg3}
              alt="First slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg16}
              alt="Second slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg12}
              alt="Durres"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg17}
              alt="Second slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
      <TextContainer>
        <h4>Summer in Albania: A Mesmerizing Experience</h4>
        <p>
          Summer in Albania is a wonderful experience. The country's beautiful
          beaches, warm climate, and vibrant atmosphere make it a popular
          tourist destination. The turquoise waters and stunning scenery are
          sure to leave you in awe. Whether you want to relax or engage in water
          activities, there's something for everyone in Albania. Come and
          discover its hidden gems for a summer vacation you'll never forget!
        </p>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CarouselContainer = styled.div`
  width: 100vw;
  max-height: 50%;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  padding: 20px;
  max-width: 50%;
  max-height: 50%;
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
  @media (min-width: 800px) {
    max-width: initial;
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 100%;
    max-width: initial;
  }
`;
