import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";

export function UserInfo({ title, user }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        Name: {user.name} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
        <hr></hr>
        <br />
        Email: {user.email} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
        <hr></hr>
        <br />
        Phone: {user.phone} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
        <hr></hr>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 100px;
  padding-top: 30px;
  padding-right: 200px;

  text-align: center;
`;

const Title = styled.h2`
  padding-bottom: 40px;
  font-size: 25px;
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 20px;
`;
