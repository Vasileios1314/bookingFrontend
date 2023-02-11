import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function Filters({ apartments, handleFilter }) {
  const [filter, setFilter] = useState({
    location: "Select All",
    balcony: "Select All",
    bedroom: "Select All",
    maxPeople: "Select All",
    parking: "Select All",
    pet: "Select All",
    priceRange: "Select All",
    ratingRange: "Select All",
    checkIn: "",
    checkout: "",
    search: "",
  });

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
    handleFilter(filter);
  };

  const locationOptions = [
    "Select All",
    ...new Set(apartments.map((apartment) => apartment.location)),
  ];
  const balconyOptions = ["Select All", "yes", "no"];
  const bedroomOptions = [
    "Select All",
    ...new Set(apartments.map((apartment) => apartment.bedroom)),
  ];
  const maxPeopleOptions = [
    "Select All",
    ...new Set(apartments.map((apartment) => apartment.maxPeople)),
  ];
  const parkingOptions = ["Select All", "yes", "no"];
  const petOptions = ["Select All", "yes", "no"];
  const priceRangeOptions = ["Select All", "$", "$$", "$$$", "$$$$"];
  const ratingRangeOptions = ["Select All", "1", "2", "3", "4", "5"];

  return (
    <FilterSection>
      <FilterTitle>Search</FilterTitle>
      <FilterOption>
        <FilterLabel htmlFor="search"></FilterLabel>
        <FilterInput
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
        />
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="location">Location</FilterLabel>
        <FilterSelect name="location" id="location" onChange={handleChange}>
          {locationOptions.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="balcony">Balcony</FilterLabel>
        <FilterSelect name="balcony" id="balcony" onChange={handleChange}>
          {balconyOptions.map((balcony) => (
            <option key={balcony} value={balcony}>
              {balcony}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="bedroom">Bedrooms</FilterLabel>
        <FilterSelect name="bedroom" id="bedroom" onChange={handleChange}>
          {bedroomOptions.map((bedroom) => (
            <option key={bedroom} value={bedroom}>
              {bedroom}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="maxPeople">Max People</FilterLabel>
        <FilterSelect name="maxPeople" id="maxPeople" onChange={handleChange}>
          {maxPeopleOptions.map((maxPeople) => (
            <option key={maxPeople} value={maxPeople}>
              {maxPeople}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="parking">Parking</FilterLabel>
        <FilterSelect name="parking" id="parking" onChange={handleChange}>
          {parkingOptions.map((parking) => (
            <option key={parking} value={parking}>
              {parking}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="pet">Pet</FilterLabel>
        <FilterSelect name="pet" id="pet" onChange={handleChange}>
          {petOptions.map((pet) => (
            <option key={pet} value={pet}>
              {pet}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="priceRange">Price Range</FilterLabel>
        <FilterSelect name="priceRange" id="priceRange" onChange={handleChange}>
          {priceRangeOptions.map((priceRange) => (
            <option key={priceRange} value={priceRange}>
              {priceRange}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
      <FilterOption>
        <FilterLabel htmlFor="ratingRange">Rating Range</FilterLabel>
        <FilterSelect
          name="ratingRange"
          id="ratingRange"
          onChange={handleChange}
        >
          {ratingRangeOptions.map((ratingRange) => (
            <option key={ratingRange} value={ratingRange}>
              {ratingRange}
            </option>
          ))}
        </FilterSelect>
      </FilterOption>
    </FilterSection>
  );
}

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 65%;
  width: 30%;
  align-items: center;
  background-color: #ffc107;
  padding: 20px;
  position: fixed;
  top: 140px;
  border-radius: 5px;
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const FilterOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 3px;
`;

const FilterInput = styled.input`
  width: 28vw;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 3px;
`;

const FilterSelect = styled.select`
  width: 28vw;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;
