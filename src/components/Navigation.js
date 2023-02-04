import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSignOut,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <Nav>
      <Logo href="/">
        <Img src={logo} alt="Aleksandria"></Img>
      </Logo>
      {!open ? (
        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
      ) : (
        <Hamburger onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faTimes} />
        </Hamburger>
      )}
      <Menu open={open}>
        <MenuLink to="/empty1">Apartments</MenuLink>
        <MenuLink to="/empty2">Discover</MenuLink>
        <MenuLink to="/empty2">About us</MenuLink>
        {token ? (
          <MenuLink as="div" onClick={() => dispatch(logOut())}>
            <FontAwesomeIcon icon={faSignOut} />
            Logout
          </MenuLink>
        ) : (
          <MenuLink to="/login">
            <FontAwesomeIcon icon={faSignIn} />
            Login
          </MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

const MenuLink = styled(Link)`
  z-index: 10;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: #bd2323;
  }
`;

const Nav = styled.div`
  z-index: 10;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* position: absolute; */
  position: sticky;
  top: 0;
`;

const Logo = styled.a`
  z-index: 10;
  width: 100px;
  height: 120px;
  @media (max-width: 780px) {
    width: 50px;
    height: 70px;
  }
`;

const Img = styled.img`
  z-index: 10;
  width: 100px;
  height: 120px;
  @media (max-width: 780px) {
    width: 50px;
    height: 70px;
  }
`;

const Hamburger = styled.div`
  z-index: 10;
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
