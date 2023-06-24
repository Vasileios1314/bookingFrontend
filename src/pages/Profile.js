import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { UserProfileMenu, UserInfo } from "../components";

export function Profile({ onRouteChange }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    onRouteChange(false);
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Container>
      <Navigation>
        {token && user && (
          <UserProfileMenu
            selectedMenuItem={selectedMenuItem}
            onMenuItemClick={handleMenuItemClick}
          />
        )}
      </Navigation>
      <ContentWrapper>
        {selectedMenuItem === "personal" && (
          <UserInfo title="Personal Details" user={user} />
        )}
        {selectedMenuItem === "security" && (
          <UserInfo title="Security" user={user} />
        )}
        {selectedMenuItem === "payment" && (
          <UserInfo title="Payment Details" user={user} />
        )}
        {selectedMenuItem === "reservations" && (
          <UserInfo title="Reservations" user={user} />
        )}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  margin-right: 300px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin: 0 20px;
  height: 100%;
`;

const Navigation = styled.nav`
  margin-top: 100px;
`;
