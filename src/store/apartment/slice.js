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
  },
});
export const { fetchApartments, fetchApartmentById } = apartmentSlice.actions;

export default apartmentSlice.reducer;
