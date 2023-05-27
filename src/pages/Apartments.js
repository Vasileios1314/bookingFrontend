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

  const [filteredApartments, setFilteredApartments] = useState(apartments);
  const [filter, setFilter] = useState({
    balcony: "Select All",
    bedroom: "Select All",
    maxPeople: "Select All",
    parking: "Select All",
    pet: "Select All",
    ratingRange: "5",
  });

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    dispatch(getApartments());
    onRouteChange(true);
  }, []);

  useEffect(() => {
    const filtered = apartments.filter((apartment) => {
      // Filter based on balcony
      if (
        filter.balcony !== "Select All" &&
        apartment.balcony !== filter.balcony
      ) {
        return false;
      }

      // Filter based on bedroom
      if (
        filter.bedroom !== "Select All" &&
        apartment.bedroom !== parseInt(filter.bedroom)
      ) {
        return false;
      }

      // Filter based on maxPeople
      if (
        filter.maxPeople !== "Select All" &&
        apartment.maxPeople !== parseInt(filter.maxPeople)
      ) {
        return false;
      }

      // Filter based on parking
      if (
        filter.parking !== "Select All" &&
        apartment.parking !== filter.parking
      ) {
        return false;
      }

      // Filter based on pet
      if (filter.pet !== "Select All" && apartment.pet !== filter.pet) {
        return false;
      }

      // Filter based on rating range
      if (filter.ratingRange !== "Select All") {
        const minRating = parseInt(filter.ratingRange);
        const averageRating =
          apartment.ratings.reduce((sum, rating) => sum + rating.rating, 0) /
          apartment.ratings.length;
        if (averageRating > minRating) {
          return false;
        }
      }

      return true;
    });

    setFilteredApartments(filtered);
  }, [filter, apartments]);

  const ApartmentList = ({ apartments }) => {
    return apartments.map((item) => {
      return (
        <Container>
          <ApartmentCard
            id={item.id}
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

  if (filteredApartments.length === 0) {
    console.log("first", filteredApartments.length);
  } else {
    console.log("second", filteredApartments.length);
  }
  return (
    <OutterContainer>
      <Hero
        imgHero={banner}
        title="'Book your stay with as'"
        paragraf=" Luxurious amenities, spacious rooms, and breathtaking views."
      />
      <Filters apartments={apartments} handleFilter={handleFilter} />
      {filteredApartments.length === 0 && <Text>No Results</Text>}
      <ApartmentList apartments={filteredApartments} />
    </OutterContainer>
  );
}

//set min-height for the filter
const OutterContainer = styled.div`
  min-height: 170vh;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-top: 50px;
`;
