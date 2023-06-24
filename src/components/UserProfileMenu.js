import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCreditCard,
  faShield,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logOut } from "../store/user/slice";
import { selectUser } from "../store/user/selectors";

export function UserProfileMenu({ selectedMenuItem, onMenuItemClick }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleMenuItemClick = (menuItem) => {
    onMenuItemClick(menuItem);
  };

  return (
    <MenuContainer>
      <Menu>
        <MenuItem onClick={() => handleMenuItemClick("personal")}>
          <Link style={{ textDecoration: "none" }}>
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faUser} /> &nbsp; Personal details
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("security")}>
          <Link style={{ textDecoration: "none" }}>
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faShield} /> &nbsp; Security
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("payment")}>
          <Link style={{ textDecoration: "none" }}>
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faCreditCard} /> &nbsp; Payment details
            </MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("reservations")}>
          <Link style={{ textDecoration: "none" }}>
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faBookmark} /> &nbsp; Reservations
            </MenuTitle>
          </Link>
        </MenuItem>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <MenuItem onClick={() => dispatch(logOut())}>
            <MenuTitle>
              {" "}
              <FontAwesomeIcon icon={faSignOut} /> &nbsp; Log Out
            </MenuTitle>
          </MenuItem>
        </Link>
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
