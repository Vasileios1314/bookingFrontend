import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { postRatingAction } from "../store/apartment/thunks";

// Styled component for the container div
const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Styled component for the icon
const StyledIcon = styled(FontAwesomeIcon)`
  color: #0d6efd;
  font-size: 24px;
`;

export const Stars = (props) => {
  const dispatch = useDispatch();

  const averageRating =
    props.rating && props.rating.length > 0
      ? props.rating.reduce((sum, current) => sum + current.rating, 0) /
        props.rating.length
      : 0;
  let firstExample = {
    size: props.size,
    value: averageRating,
    isHalf: props.isHalf,
    edit: props.edit,
    onChange: (newValue) => {
      dispatch(postRatingAction(newValue));
    },
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <StarsContainer>
            <ReactStars {...firstExample} />
            {averageRating.toFixed(1)}
            <StyledIcon icon={faThumbsUp} />
          </StarsContainer>
        </div>
      </div>
    </>
  );
};
