import React, { useEffect } from "react";
import styled from "styled-components";

export function Apartments({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);
  console.log("homePage", onRouteChange);
  return <div>Apartments</div>;
}
