import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = { brands: [], price: [], mileage: [] };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setAdvertsFilter(state, action) {
      console.log(state);

      return (state.filter = { ...state, ...[action.payload] });
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setAdvertsFilter } = filtersSlice.actions;
