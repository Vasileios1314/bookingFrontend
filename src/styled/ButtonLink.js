import styled from "styled-components";

export const ButtonLink = styled.button`
  font-family: "Ubuntu", sans-serif;
  width: 20.5rem;
  height: 3.5rem;
  background: ${(props) => (props.primary ? "#fff" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#fff")};
  font-size: 1.5rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid #fff;
  border-radius: 99px;
  text-align: center;
  text-decoration: none;

  &:hover {
    border: 3px solid #f1f1f1;
    color: ${(props) => (props.primary ? "white" : "#000")};
    background: ${(props) => (props.primary ? "#fff" : "#f1f1f1")};
    cursor: pointer;
  }
`;
