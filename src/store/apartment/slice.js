import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [],
};

export const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    fetchApartments: (state, action) => {
      state.apartments = action.payload.apartment;
    },
  },
});

export const { fetchApartments } = apartmentSlice.actions;

export default apartmentSlice.reducer;
