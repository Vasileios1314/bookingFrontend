import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Filters({ apartments, handleFilter }) {
  const [filter, setFilter] = useState({
    balcony: "",
    bedroom: "Select All",
    parking: "Select All",
    pet: "Select All",
    ratingRange: "5",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    let filterValue = value;
    if (value === "Select All") {
      filterValue = "Select All"; // Set to null for "Select All" option
    } else if (name === "ratingRange") {
      value === "5" ? (filterValue = "5") : (filterValue = value);
    } else {
      filterValue = value === "yes" ? true : false; // Convert "yes" or "no" to true or false
    }
    setFilter((prevFilter) => ({ ...prevFilter, [name]: filterValue }));
    handleFilter({ ...filter, [name]: filterValue });
  };

  const balconyOptions = ["Select All", "yes", "no"];
  const bedroomOptions = [
    "Select All",
    ...new Set(apartments.map((apartment) => apartment.bedroom)),
  ];

  const parkingOptions = ["Select All", "yes", "no"];
  const petOptions = ["Select All", "yes", "no"];

  return (
    <FilterSection>
      <FilterTitle>
        <FontAwesomeIcon icon={faMagnifyingGlass} /> &nbsp;Search
      </FilterTitle>
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
        <FilterLabel htmlFor="ratingRange">Rating Range</FilterLabel>
        <FilterRange
          type="range"
          name="ratingRange"
          id="ratingRange"
          min="1"
          max="5"
          step="1"
          onChange={handleChange}
        />
        <FilterRangeLabel>
          {filter.ratingRange} {filter.ratingRange === "1" ? "Star" : "Stars"}
        </FilterRangeLabel>
      </FilterOption>
    </FilterSection>
  );
}

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 55%;
  width: 30%;
  align-items: center;
  background-color: #ffc107;
  padding: 20px;
  position: absolute;
  border-radius: 5px;

  @media (max-width: 800px) {
    position: relative;
    width: 100%;
    min-height: auto;
    top: auto;
    left: auto;
  }
`;

const FilterTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const FilterOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 3px;
`;

const FilterSelect = styled.select`
  width: 28vw;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  @media (max-width: 800px) {
    width: 80vw;
  }
`;
const FilterRange = styled.input`
  width: 28vw;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

const FilterRangeLabel = styled.span`
  font-size: 16px;
  margin-top: 5px;
`;
