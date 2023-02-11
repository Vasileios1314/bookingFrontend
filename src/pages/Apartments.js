import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartments } from "../store/apartment/thunks";
import { selectApartments } from "../store/apartment/selectors";
import styled from "styled-components";
import { ApartmentCard, Hero, Filters } from "../components";
import { banner } from "../assets";

export function Apartments({ onRouteChange }) {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);

  useEffect(() => {
    dispatch(getApartments());
    onRouteChange(true);
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;

  const ApartmentList = ({ apartments }) => {
    return apartments.map((item) => {
      return (
        <Container>
          <ApartmentCard
            key={item.id}
            availabilities={item.availabilities}
            balcony={item.balcony}
            bedroom={item.bedroom}
            comments={item.comments}
            description={item.description}
            image={item.image}
            location={item.location}
            maxPeople={item.maxPeople}
            name={item.name}
            parking={item.parking}
            pet={item.pet}
            price={item.price}
            rating={item.ratings}
          />
        </Container>
      );
    });
  };

  return (
    <OutterContainer>
      <Hero
        imgHero={banner}
        title="'Book your stay with as'"
        paragraf=" Luxurious amenities, spacious rooms, and breathtaking views."
      />
      <Filters apartments={apartments} />
      <ApartmentList apartments={apartments} />
    </OutterContainer>
  );
}

const OutterContainer = styled.div`
  margin: 20px;
`;
