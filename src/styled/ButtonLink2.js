import styled from "styled-components";

export const ButtonLink2 = styled.button`
  font-family: "Ubuntu", sans-serif;
  width: 10.5rem;
  height: 3.5rem;
  background: ${(props) => (props.primary ? "#000" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#000")};
  font-size: 1.5rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #000;
  border-radius: 99px;
  text-align: center;
  text-decoration: none;

  &:hover {
    border: 3px solid #0000;
    color: ${(props) => (props.primary ? "white" : "#fff")};
    background: ${(props) => (props.primary ? "#000" : "#000")};
    cursor: pointer;
  }
`;
