import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apartmentId } from "../store/apartment/thunks";
import { selectApartment } from "../store/apartment/selectors";
import styled from "styled-components";
import { Stars, Comments, BookingCalendar } from "../components";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faLeaf,
  faMapMarker,
  faPaw,
  faPeopleGroup,
  faPeopleRoof,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export function Booking({ onRouteChange }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apartment = useSelector(selectApartment);

  try {
    useEffect(() => {
      dispatch(apartmentId(id));
      onRouteChange(true);
    }, []);
    console.log("selectApartmentById", apartment);

    return (
      <ApartmentContainer key={apartment.id}>
        <TitleContainer>
          <Title>{apartment.name}</Title>
          <SubTitle>
            {" "}
            <FontAwesomeIcon icon={faMapMarker} /> &nbsp;
            {apartment.location}
          </SubTitle>
        </TitleContainer>
        <RatingContainer>
          <Rating>
            <Stars
              rating={apartment?.ratings}
              edit={true}
              isHalf={false}
              size={window.innerWidth <= 480 ? 20 : 30}
            />
          </Rating>
        </RatingContainer>
        <ImageContainer>
          {apartment.image.length > 0 && (
            <ReactImageGallery
              items={apartment.image.map((img) => ({
                original: img,
                thumbnail: img,
              }))}
              showBullets={true}
              thumbnailPosition="left"
              renderItem={(item) => (
                <Image src={item.original} alt={item.originalAlt} />
              )}
            />
          )}
        </ImageContainer>
        <DescriptionAmenitiesContainer>
          <DescriptionContainer>
            <DescriptionTitle>
              <FontAwesomeIcon icon={faBookOpen} /> &nbsp; Description
            </DescriptionTitle>
            <DescriptionText>{apartment.description}</DescriptionText>
          </DescriptionContainer>
          <DescriptionContainer>
            <DescriptionTitle>Amenities</DescriptionTitle>
            <DescriptionText>
              <FontAwesomeIcon icon={faWifi} /> &nbsp; Wifi: Yes
            </DescriptionText>
            <DescriptionText>
              <FontAwesomeIcon icon={faPeopleGroup} /> &nbsp; Max capacity:{" "}
              {apartment.maxPeople} persons.
            </DescriptionText>
            <DescriptionText>
              <FontAwesomeIcon icon={faPaw} /> &nbsp; Pet Friendly:{" "}
              {apartment.pet ? "Yes" : "No"}
            </DescriptionText>
            <DescriptionText>
              <FontAwesomeIcon icon={faLeaf} /> &nbsp; Balcony:{" "}
              {apartment.balcony ? "Yes" : "No"}
            </DescriptionText>
            <DescriptionText>
              <FontAwesomeIcon icon={faPeopleRoof} /> &nbsp; Number of Bedrooms:{" "}
              {apartment.bedroom}
            </DescriptionText>
          </DescriptionContainer>
        </DescriptionAmenitiesContainer>
        <CommentsContainer>
          <BookingCalendar availabilities={apartment?.availabilities} />
        </CommentsContainer>
        <CommentsContainer>
          <Comments comments={apartment?.comments} />
        </CommentsContainer>
      </ApartmentContainer>
    );
  } catch (error) {
    console.log(error); // Log the specific error
  }
}

const ApartmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.p`
  margin: 0;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
  margin-right: 40px;
`;

const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  height: 500px; /* Adjust the height as desired */
`;

const Image = styled.img`
  width: 1500px;
  height: 500px;
  object-fit: cover; /* Adjust the object-fit property as desired */
  border-radius: 8px;
`;

const DescriptionAmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const DescriptionContainer = styled.div`
  flex-basis: 48%;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  background-color: #e4f4ff;
  border-radius: 8px;
`;

const DescriptionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
