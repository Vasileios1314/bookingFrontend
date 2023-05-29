import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export function CheckOut({ onRouteChange }) {
  const location = useLocation();
  const selectedDays = location.state?.selectedDays || [];

  useEffect(() => {
    onRouteChange(false);
  }, []);

  return (
    <div>
      <h2>CheckOut</h2>
      <p>Selected Days: {selectedDays.join(", ")}</p>
      {/* Render the rest of your checkout page */}
    </div>
  );
}
