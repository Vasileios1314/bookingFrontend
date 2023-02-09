import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEmptyStar } from "@fortawesome/free-solid-svg-icons";
// import StarRating from "react-rating-stars-component";

export function ApartmentCard(props) {
  const Star = styled.i`
    font-size: 20px;
    color: #ffc107;
    &:before {
      content: "\f005";
      font-family: "Font Awesome 5 Free";
    }
  `;

  const EmptyStar = styled.i`
    font-size: 20px;
    color: #e4e5e9;
    &:before {
      content: "\f006";
      font-family: "Font Awesome 5 Free";
    }
  `;

  function RatingStars({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Star>
            <faStar key={i} />
          </Star>
        );
      } else {
        stars.push(<EmptyStar>{/* <StarRating key={i} /> */}</EmptyStar>);
      }
    }

    return <div>{stars}</div>;
  }
  const Name = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  const Location = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
  `;

  const Bedroom = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const Balcony = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const Price = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const Pet = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const Description = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
  `;

  const Parking = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const CardWrapper = styled.div`
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    overflow: hidden;
    margin: 40px;
    width: 65%;
    height: 300px;
    display: flex;
    justify-content: flex-end;
  `;

  const ImageWrapper = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.image[0]});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const InfoWrapper = styled.div`
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
  `;

  const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 50%;
    margin-right: auto;
  `;

  const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 20%;
    margin-right: auto;
    font-size: 14px;
    color: #363636;

    &:hover {
      color: #bd2323;
      cursor: pointer;
    }
  `;
  const Ratings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 40px;
    width: 50%;
    margin-right: auto;
  `;

  const RestInfoWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    bottom: 20px;
    right: 20px;
    align-items: center;
    position: relative;
    color: #5e5d5d;
  `;

  const Button = styled.button`
    background-color: #4caf50;
    border: 4px solid #4caf50;
    color: white;
    font-weight: bold;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 99px;

    &:hover {
      border: 3px solid #4caf50;
      color: ${(props) => (props.primary ? "white" : "#4caf50")};
      background: ${(props) => (props.primary ? "#fff" : "#fff")};
      cursor: pointer;
  `;

  return (
    <CardWrapper key={props.key}>
      <ImageWrapper image={props.image} />
      <InfoWrapper>
        <TitleWrapper>
          <Name>{props.name}</Name>
          <Location>{props.location}</Location>
          <Description>{props.description}</Description>
          <Ratings>
            <RatingStars rating={props.rating} />
            {props.rating.length} ratings
          </Ratings>
        </TitleWrapper>
        <Reviews>{props.comments.length} Reviews</Reviews>
        <RestInfoWrapper>
          <Bedroom>Bedroom: {props.bedroom}</Bedroom>
          <Balcony>Balcony: {props.balcony ? "Yes" : "No"}</Balcony>
          <Price>Price: ${props.price}/month</Price>
          <Pet>Pet: {props.pet ? "No" : "Yes"}</Pet>
          <Parking>Parking: {props.parking ? "Yes" : "No"}</Parking>
          <Button>See Availability</Button>
        </RestInfoWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
}
