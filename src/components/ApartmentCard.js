import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stars } from "../components";

export function ApartmentCard(props) {
  const Name = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Location = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Bedroom = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Balcony = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Price = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Pet = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
  `;

  const Description = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 10px;
      margin-bottom: 0;
    }
  `;

  const Parking = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
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
    @media (max-width: 600px) {
      width: 95%;
      margin: 10px;
      max-height: 95%;
      margin-bottom: 20px;
    }
  `;

  const ImageWrapper = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.image[0]});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 600px) {
      width: 50%;
      height: 100%;
    }
  `;

  const InfoWrapper = styled.div`
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `;

  const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 50%;
    margin-right: auto;
    @media (max-width: 480px) {
      width: 100%;
      margin-bottom: 0;
    }
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
    @media (max-width: 600px) {
      font-size: 12px;
      align-items: center;
    }

    @media (max-width: 480px) {
      width: 100%;
      margin-bottom: 20px;
      align-items: center;
    }
  `;
  const Ratings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 40px;
    width: 50%;
    margin-right: auto;
    @media (max-width: 480px) {
      width: 90%;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;
    }
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
    @media (max-width: 480px) {
      margin-top: 2px;
      align-items: center;
      bottom: 20px;
      left: 0;
    }
  `;

  const Button = styled.button`
    background-color: #4caf50;
    border: 2px solid #4caf50;
    color: white;
    font-weight: bold;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 99px;
    @media only screen and (max-width: 800px) {
      font-size: 14px;
      margin-top: 5px;
      padding: 5px;
    }

    &:hover {
      border: 2px solid #4caf50;
      color: ${(props) => (props.primary ? "white" : "#4caf50")};
      background: ${(props) => (props.primary ? "#fff" : "#fff")};
      cursor: pointer;
    }
  `;
  return (
    <CardWrapper key={props.id}>
      <ImageWrapper image={props.image} />
      <InfoWrapper>
        <TitleWrapper>
          <Name>{props.name}</Name>
          <Location>{props.location}</Location>
          <Description>{props.description}</Description>
          <Ratings>
            <Stars rating={props.rating} edit={false} isHalf={true} />
          </Ratings>
        </TitleWrapper>
        <Reviews>
          {props.comments.length}{" "}
          {props.comments.length === 1 ? "Review" : "Reviews"}
        </Reviews>
        <RestInfoWrapper>
          <Bedroom>Bedroom: {props.bedroom}</Bedroom>
          <Balcony>Balcony: {props.balcony ? "Yes" : "No"}</Balcony>
          <Price>Price: ${props.price}/month</Price>
          <Pet>Pet: {props.pet === false ? "No" : "Yes"}</Pet>
          <Parking>Parking: {props.parking ? "Yes" : "No"}</Parking>
          <Link to={`/apartments/${props.id}`}>
            <Button>See Availability</Button>
          </Link>
        </RestInfoWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
}
