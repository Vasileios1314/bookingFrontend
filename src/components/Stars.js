import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

export const Stars = (props) => {
  const dispatch = useDispatch();

  const averageRating =
    props.rating && props.rating.length > 0
      ? props.rating.reduce((sum, current) => sum + current.rating, 0) /
        props.rating.length
      : 0;

  let firstExample = {
    size: 30,
    value: averageRating,
    isHalf: props.isHalf,
    edit: props.edit,
    onChange: (newValue) => {
      // dispatch(ThunkAction(newValue));
      console.log(`Example 3: new value is ${newValue}`);
    },
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <ReactStars {...firstExample} />
        </div>
      </div>
    </>
  );
};
