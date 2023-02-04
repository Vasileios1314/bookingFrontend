import React, { useEffect } from "react";
import styled from "styled-components";
import { Hero } from "../components";
import { carouselImg13 } from "../assets";

export function About({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);

  return (
    <div>
      {/* <Hero
        imgHero={carouselImg13}
        title="'Can wait to meet you'"
        paragraf=" Luxurious amenities, spacious rooms, and breathtaking views await
            you in this prime location. Discover the epitome of comfort and
            relaxation in Vlorë, Albania."
      /> */}
    </div>
  );
}
