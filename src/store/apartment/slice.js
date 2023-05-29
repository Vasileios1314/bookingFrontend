import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [],
  apartmentById: {},
};

export const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    fetchApartments: (state, action) => {
      state.apartments = action.payload.apartment;
    },
    fetchApartmentById: (state, action) => {
      state.apartmentById = action.payload.apartmentById;
    },
    addRating: (state, action) => {
      const { apartmentId, rating } = action.payload;
      state.apartmentById = {
        ...state.apartmentById,
        ratings: [...state.apartmentById.ratings, { apartmentId, rating }],
      };
    },
    addComment: (state, action) => {
      const { apartmentId, comment } = action.payload;
      state.apartmentById = {
        ...state.apartmentById,
        comments: [...state.apartmentById.comments, { apartmentId, comment }],
      };
    },
  },
});
export const { fetchApartments, fetchApartmentById, addRating, addComment } =
  apartmentSlice.actions;

export default apartmentSlice.reducer;
