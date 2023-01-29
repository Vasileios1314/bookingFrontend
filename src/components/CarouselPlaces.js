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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
              src={carouselImg3}
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
              src={carouselImg16}
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
              src={carouselImg12}
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
              src={carouselImg17}
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
        <div
          style={{
            paddingLeft: "20px",
          }}
        >
          <h4>Summer in Albania: A Mesmerizing Experience</h4>
          <p>
            Summer in Albania is a wonderful experience. The country's beautiful
            beaches, warm climate, and vibrant atmosphere make it a popular
            tourist destination. The turquoise waters and stunning scenery are
            sure to leave you in awe. Whether you want to relax or engage in
            water activities, there's something for everyone in Albania. Come
            and discover its hidden gems for a summer vacation you'll never
            forget!
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-height: 90vh;
  max-width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
