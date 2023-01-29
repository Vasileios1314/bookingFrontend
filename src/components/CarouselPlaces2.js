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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingLeft: "20px",
          }}
        >
          <h4>Summer At The Mountains of Albania: Just Do It</h4>
          <p>
            Discover the summer magic of Albania's mountain ranges. Enjoy scenic
            hikes, fresh air, and breathtaking views. Immerse yourself in nature
            and rejuvenate your spirit. A summer vacation in the mountains is a
            unique experience not to be missed.
          </p>
        </div>
        <Carousel
          keyboard
          touch
          wrap
          activeIndex={index}
          onSelect={handleSelect}
          style={{ width: "100%" }}
        >
          <Carousel.Item width="600px" height="600px">
            <img
              className="d-block "
              src={carouselImg2}
              alt="First slide"
              width="600px"
              height="600px"
            />
            <Carousel.Caption>
              <h3>Summer Taste</h3>
              <p>Find the ideal place for you and your partner or family</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item width="600px" height="600px">
            <img
              className="d-block "
              src={carouselImg4}
              alt="Second slide"
              width="600px"
              height="600px"
            />
            <Carousel.Caption>
              <h3>Summer Taste</h3>
              <p>Find the ideal place for you and your partner or family</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item width="600px" height="600px">
            <img
              className="d-block "
              src={carouselImg7}
              alt="Durres"
              width="600px"
              height="600px"
            />
            <Carousel.Caption>
              <h3>Summer Taste</h3>
              <p>Find the ideal place for you and your partner or family</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item width="600px" height="600px">
            <img
              className="d-block "
              src={carouselImg10}
              alt="Second slide"
              width="600px"
              height="600px"
            />
            <Carousel.Caption>
              <h3>Summer Taste</h3>
              <p>Find the ideal place for you and your partner or family</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-top: 40px;
  max-height: 90vh;
  max-width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
