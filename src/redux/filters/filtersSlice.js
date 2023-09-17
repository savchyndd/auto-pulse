import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setAdvertsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setAdvertsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
