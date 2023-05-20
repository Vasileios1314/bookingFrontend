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
    location: "Select All",
    balcony: "Select All",
    bedroom: "Select All",
    maxPeople: "Select All",
    parking: "Select All",
    pet: "Select All",
    priceRange: "Select All",
    ratingRange: "Select All",
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
      // Filter based on location
      if (
        filter.location !== "Select All" &&
        apartment.location !== filter.location
      ) {
        return false;
      }

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

      // Filter based on price range
      if (filter.priceRange !== "Select All") {
        const priceRangeMap = {
          $: [0, 100],
          $$: [101, 200],
          $$$: [201, 300],
          $$$$: [301, 400],
        };
        const [minPrice, maxPrice] = priceRangeMap[filter.priceRange];
        if (apartment.price < minPrice || apartment.price > maxPrice) {
          return false;
        }
      }

      // Filter based on rating range
      if (filter.ratingRange !== "Select All") {
        const minRating = parseInt(filter.ratingRange);
        if (apartment.ratings < minRating) {
          return false;
        }
      }

      return true;
    });

    setFilteredApartments(filtered);
    onRouteChange(true);
  }, [filter, apartments]);

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

  return (
    <OutterContainer>
      <Hero
        imgHero={banner}
        title="'Book your stay with as'"
        paragraf=" Luxurious amenities, spacious rooms, and breathtaking views."
      />
      <Filters apartments={apartments} handleFilter={handleFilter} />
      <ApartmentList apartments={filteredApartments} />
    </OutterContainer>
  );
}

const OutterContainer = styled.div`
  margin: 20px;
`;
