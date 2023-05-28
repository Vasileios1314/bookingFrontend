import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { ButtonLink2 } from "../styled";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export function CarouselPlaces2(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container key={id}>
      <TextContainer>
        <h4>{props.title}</h4>
        <p>{props.paragraf}</p>
        {props.buttonDir ? (
          <a href={props.buttonDir} target="_blank" rel="noopener noreferrer">
            <ButtonLink2>{props.buttonTitle}</ButtonLink2>
          </a>
        ) : null}
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
          {props.fotos.map((foto) => {
            return (
              <Carousel.Item key={uuidv4()}>
                <img
                  className="d-block w-100"
                  src={foto}
                  alt="First slide"
                  width="600px"
                  height="600px"
                />
              </Carousel.Item>
            );
          })}
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
  text-align: center;

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
