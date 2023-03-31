import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += 1;
        // state.value += payload;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
