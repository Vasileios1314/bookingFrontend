import React, { useState } from "react";
import styled from "styled-components";
import {
  carouselImg2,
  carouselImg4,
  carouselImg7,
  carouselImg10,
} from "../assets";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export function CarouselPlaces2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <TextContainer>
        <h4>Summer At The Mountains of Albania: Just Do It</h4>
        <p>
          Discover the summer magic of Albania's mountain ranges. Enjoy scenic
          hikes, fresh air, and breathtaking views. Immerse yourself in nature
          and rejuvenate your spirit. A summer vacation in the mountains is a
          unique experience not to be missed.
        </p>
      </TextContainer>
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
              src={carouselImg2}
              alt="First slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg4}
              alt="Second slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg7}
              alt="Durres"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={carouselImg10}
              alt="Second slide"
              width="600px"
              height="600px"
            />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CarouselContainer = styled.div`
  width: 50%;
  max-height: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    order: 1;
    width: 100vw;
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
    order: 2;
    width: 100%;
    max-width: initial;
  }
`;
