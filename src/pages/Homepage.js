import { Hero, CarouselPlaces, CarouselPlaces2 } from "../components";
import styled from "styled-components";
import { useEffect } from "react";
import {
  hero,
  carouselImg3,
  carouselImg16,
  carouselImg12,
  carouselImg17,
  carouselImg2,
  carouselImg4,
  carouselImg7,
  carouselImg10,
  carouselImg14,
} from "../assets";
import { Title, Paragraf, ButtonLink } from "../styled";
import { Link } from "react-router-dom";

export const Homepage = ({ onRouteChange }) => {
  useEffect(() => {
    onRouteChange(true);
  }, []);

  return (
    <Container>
      <Hero
        imgHero={hero}
        title="'Experience the Ultimate Comfort at Vlorë's Premier Apartments
            Hotel'"
        paragraf=" Luxurious amenities, spacious rooms, and breathtaking views await
            you in this prime location. Discover the epitome of comfort and
            relaxation in Vlorë, Albania."
        buttonDir="/apartments"
        buttonTitle="Book An Apartment"
      />
      <CarouselPlaces
        fotos={[carouselImg3, carouselImg16, carouselImg12, carouselImg17]}
        title={"Summer in Albania: A Mesmerizing Experience"}
        paragraf={
          "Summer in Albania is a wonderful experience. The country's beautiful beaches, warm climate, and vibrant atmosphere make it a popular tourist destination. The turquoise waters and stunning scenery are sure to leave you in awe. Whether you want to relax or engage in water activities, there's something for everyone in Albania. Come and discover its hidden gems for a summer vacation you'll never forget!"
        }
        buttonDir="https://www.dailymail.co.uk/femail/article-11108241/Is-Albania-destination-summer-TikTok-users-wild-country.html"
        buttonTitle="Discover"
      />
      <CarouselPlaces2
        fotos={[carouselImg2, carouselImg4, carouselImg7, carouselImg10]}
        title={"Summer At The Mountains of Albania: Just Do It"}
        paragraf={
          "Discover the summer magic of Albania's mountain ranges. Enjoy scenic hikes, fresh air, and breathtaking views. Immerse yourself in nature and rejuvenate your spirit. A summer vacation in the mountains is a unique experience not to be missed."
        }
        buttonDir="https://www.lonelyplanet.com/articles/albania-four-day-itinerary"
        buttonTitle="Pioneer"
      />
      <Container>
        <HeroSection>
          <InnerContainer>
            <Title>
              Enim occaecat ipsum reprehenderit fugiat aute elit commodo
              reprehenderit occaecat ea amet ut adipisicing.
            </Title>
            <Paragraf>
              Ex magna ex duis eiusmod pariatur eu cupidatat dolore
              consequat.Consectetur in eiusmod cupidatat laborum culpa elit ad
              reprehenderit. Laborum ea consectetur labore consectetur quis enim
              aute est quis ea. Quis irure veniam commodo dolore cillum duis sit
              pariatur deserunt. Quis cupidatat commodo duis consectetur mollit.
              Dolor excepteur laboris proident nulla esse ut id esse velit non
              dolore irure. Proident ut esse ut elit.
            </Paragraf>
            <Link to={"/apartments"}>
              <ButtonLink>Take a look</ButtonLink>
            </Link>
          </InnerContainer>
        </HeroSection>
      </Container>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  max-height: 80%;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("${carouselImg14}");
  background-size: cover;
  background-position: center;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 3px;
  @media (max-width: 800px) {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
