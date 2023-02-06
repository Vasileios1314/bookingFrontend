import React from "react";
import styled from "styled-components";

export function ApartmentCard(props) {
  const CardWrapper = styled.div`
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin: 20px;
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.image[0]});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const InfoWrapper = styled.div`
    padding: 20px;
    text-align: center;
  `;

  const Name = styled.h2`
    font-size: 20px;
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

  return (
    <CardWrapper key={props.key}>
      <ImageWrapper image={props.image} />
      <InfoWrapper>
        <Name>{props.name}</Name>
        <Location>{props.location}</Location>
        <Bedroom>Bedroom: {props.bedroom}</Bedroom>
        <Balcony>Balcony: {props.balcony ? "Yes" : "No"}</Balcony>
        <Price>Price: ${props.price}/month</Price>
        <Pet>Pet: {props.pet ? "No" : "Yes"}</Pet>
        <Description>{props.description}</Description>
        <Parking>Parking: {props.parking ? "Yes" : "No"}</Parking>
      </InfoWrapper>
    </CardWrapper>
  );
}
