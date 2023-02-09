import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartments } from "../store/apartment/thunks";
import { selectApartments } from "../store/apartment/selectors";
import styled from "styled-components";
import { ApartmentCard } from "../components";

export function Apartments({ onRouteChange }) {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);

  useEffect(() => {
    dispatch(getApartments());
    onRouteChange(true);
  }, []);
  console.log("apartments", apartments);
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  `;

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
}
