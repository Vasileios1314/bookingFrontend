import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apartmentId } from "../store/apartment/thunks";
import { selectApartment } from "../store/apartment/selectors";
import styled from "styled-components";
import { Stars } from "../components";

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
          <Image src={apartment.image} alt={apartment.name} />
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
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
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
