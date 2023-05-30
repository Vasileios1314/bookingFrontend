import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCreditCard,
  faShield,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function UserProfileMenu({ selectedMenuItem, onMenuItemClick }) {
  const handleMenuItemClick = (menuItem) => {
    onMenuItemClick(menuItem);
  };

  return (
    <MenuContainer>
      <Menu>
        <MenuItem>
          <Link
            // to="/mysettings/personal?aid=2311236"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuItemClick("personal")}
          >
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faUser} /> &nbsp; Personal details
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            // to="/mysettings/personal?aid=2311236"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuItemClick("security")}
          >
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faShield} /> &nbsp; Security
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            // to="/mysettings/personal?aid=2311236"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuItemClick("payment")}
          >
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faCreditCard} /> &nbsp; Payment details
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            // to="/mysettings/personal?aid=2311236"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuItemClick("reservations")}
          >
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faBookmark} /> &nbsp; Reservations
            </MenuTitle>
          </Link>
        </MenuItem>
      </Menu>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  margin-right: 400px;
  margin-left: 0;
`;

const Menu = styled.ul`
  border: 1px solid #868686;
  width: 250px;
  list-style: none;
  padding: 0;
  border-radius: 5px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ active }) => (active ? "#eef0f1" : "transparent")};
  border-bottom: 1px solid #868686;
  height: 80px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

const MenuTitle = styled.div`
  font-weight: bold;
  color: #000;

  ${MenuItem}:hover & {
    color: #bd2323;
  }
`;
