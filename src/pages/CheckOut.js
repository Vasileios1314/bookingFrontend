import React, { useEffect } from "react";
import styled from "styled-components";

export function CheckOut({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);
  console.log("homePage", onRouteChange);
  return <div>CheckOut</div>;
}
