import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apartmentId } from "../store/apartment/thunks";
import { selectApartment } from "../store/apartment/selectors";
import styled from "styled-components";
import { Stars } from "../components";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Booking({ onRouteChange }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apartment = useSelector(selectApartment);

  try {
    useEffect(() => {
      dispatch(apartmentId(id));
      onRouteChange(false);
    }, []);
    console.log("selectApartmentById", apartment);

    return (
      <ApartmentContainer key={apartment.id}>
        <TitleContainer>
          <Title>{apartment.name}</Title>
        </TitleContainer>
        <RatingContainer>
          <Rating>
            <Stars rating={apartment?.ratings} edit={true} isHalf={false} />
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
              // Adjust the following props as desired
              renderItem={(item) => (
                <Image src={item.original} alt={item.originalAlt} />
              )}
            />
          )}
        </ImageContainer>
        <DescriptionContainer>
          <Description>{apartment.description}</Description>
        </DescriptionContainer>
        <CommentsContainer>
          {apartment &&
            apartment.comments &&
            apartment.comments.map((comment, index) => (
              <Comment key={index}>{comment.comment}</Comment>
            ))}
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
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
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

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0;
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
`;

const Comment = styled.p`
  font-size: 18px;
  margin: 0;
`;
