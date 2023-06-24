import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";
import Flag from "react-world-flags";

export function UserInfo({ title, user }) {
  console.log("user", user);

  const handleIconClick = (item) => {
    console.log("Icon clicked!", item);
  };
  return (
    <Wrapper1>
      {title === "Personal Details" && (
        <Wrapper>
          <Title>{title}</Title>
          <Info>
            <IconButton onClick={() => handleIconClick(user.name)}>
              Name: {user.name} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <hr></hr>
            <br />
            <IconButton onClick={() => handleIconClick(user.city)}>
              City: {user.city} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <hr></hr>
            <br />
            <IconButton onClick={() => handleIconClick(user.country)}>
              Country:{" "}
              <Flag
                code={user.country}
                style={{
                  width: "24px",
                  height: "16px",
                  marginLeft: "4px",
                }}
              />{" "}
              &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <hr></hr>
            <br />
            <IconButton onClick={() => handleIconClick(user.email)}>
              Email: {user.email} &nbsp;{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <hr></hr>
            <br />
            <IconButton onClick={() => handleIconClick(user.phone)}>
              Phone: {user.phone} &nbsp;{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <hr></hr>
          </Info>
        </Wrapper>
      )}
      {title === "Security" && (
        <Wrapper>
          <Title>{title}</Title>
          <Info>
            <IconButton onClick={() => handleIconClick(user.password)}>
              Password: {user?.password} &nbsp;{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
          </Info>
        </Wrapper>
      )}
      {title === "Payment Details" && (
        <Wrapper>
          <Title>{title}</Title>
          <Info>
            {/* Name: {user.name} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr>
            <br />
            Email: {user.email} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr>
            <br />
            Phone: {user.phone} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr> */}
          </Info>
        </Wrapper>
      )}
      {title === "Reservations" && (
        <Wrapper>
          <Title>{title}</Title>
          <Info>
            {/* Name: {user.name} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr>
            <br />
            Email: {user.email} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr>
            <br />
            Phone: {user.phone} &nbsp; <FontAwesomeIcon icon={faPenToSquare} />
            <hr></hr> */}
          </Info>
        </Wrapper>
      )}
    </Wrapper1>
  );
}

const Wrapper1 = styled.div``;

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
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
`;
