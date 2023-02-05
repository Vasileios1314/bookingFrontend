import React, { useEffect } from "react";
import styled from "styled-components";
import { Hero, CarouselPlaces } from "../components";
import {
  carouselImg18,
  carouselImg19,
  carouselImg20,
  carouselImg21,
  carouselImg22,
  carouselImg5,
  carouselImg9,
} from "../assets";

export function Discover({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(true);
  }, []);

  return (
    <Container>
      <Hero
        imgHero={carouselImg9}
        title="'Fun and Flavor in Albania'"
        paragraf="     From the mountains to the sea, Albania offers adventure and
        natural beauty. Take a guided tour in Valbona National Park, or
        relax on a beach along the Albanian Riviera. Taste the best of
        Albanian cuisine, a blend of Mediterranean and Balkan flavors, in
        a traditional tavern. Try dishes like pite, byrek, and qofte, and
        wash it down with local wine or raki."
        buttonDir="/apartments"
        buttonTitle="A place to enjoy"
      />
      <CarouselPlaces
        fotos={[
          carouselImg5,
          carouselImg18,
          carouselImg19,
          carouselImg20,
          carouselImg21,
          carouselImg22,
        ]}
        title={"Albania's Natural and Historical Beauty: A Harmonious Blend"}
        paragraf={
          "Albania is a country blessed with both breathtaking natural scenery and rich historical monuments. From the snow-capped peaks of the Albanian Alps to the pristine beaches along the Adriatic and Ionian coasts, Albania's diverse landscapes offer endless opportunities for adventure and exploration. But the country's beauty extends beyond its natural wonders, as it is also home to a wealth of historical and cultural landmarks. From ancient Illyrian ruins and Ottoman-era castles, to the stunning mosaics of the Byzantine churches, Albania's monuments bear witness to the country's rich and varied history. Whether one is seeking natural beauty or cultural richness, Albania provides a harmonious blend of both, making it a truly unique and captivating destination."
        }
        buttonDir="https://www.tripadvisor.com/Attractions-g294445-Activities-c47-t26-Albania.html"
        buttonTitle="Experience"
      />
      <VideoTextContainer>
        <TextContainer>
          <h4>Discover Albania</h4>
          <p>
            Albania is a country with a rich history and diverse landscapes.
            From its stunning mountain ranges to its pristine beaches, Albania
            offers a unique experience for travelers. In this video, you will be
            able to see just a few of the many wonders that Albania has to
            offer.
          </p>
        </TextContainer>
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mspf02USQBU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoContainer>
      </VideoTextContainer>
    </Container>
  );
}
const Container = styled.div`
  margin: 20px;
`;

const VideoTextContainer = styled.div`
  margin-left: auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  width: 50%;
  max-height: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    order: 1;
    width: 100vw;
  }

  iframe {
    width: 100%;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #ccc;
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
