import React, { useEffect } from "react";
import styled from "styled-components";

export function Contact({ onRouteChange }) {
  useEffect(() => {
    onRouteChange(false);
  }, []);
  console.log("homePage", onRouteChange);
  return <div>ContactUs</div>;
}
