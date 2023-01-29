import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import { Hero, CarouselPlaces, CarouselPlaces2 } from "../components";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <Container>
      {/* <h3>Hello there 👋</h3> */}
      {/* <Title />
      <Link />
      <LinkWord /> */}
      <Hero />
      <CarouselPlaces />
      <CarouselPlaces2 />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
