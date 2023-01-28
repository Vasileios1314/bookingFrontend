import React from "react";
import styled from "styled-components";
import { hero } from "../assets";

export function Hero() {
  return <HeroSection>Hero</HeroSection>;
}
const HeroSection = styled.section`
  width: 100%;
  height: 600px;
  background-image: url("${hero}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 3px;
`;
