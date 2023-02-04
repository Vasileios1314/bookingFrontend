import React, { useEffect } from "react";
import styled from "styled-components";

export function Discover({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);
  console.log("homePage", onRouteChange);
  return <div>Discover</div>;
}
