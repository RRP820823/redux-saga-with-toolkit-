import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add: (state) => (state = state + 1),
  },
});



export const { add } = counterSlice.actions;

export default counterSlice.reducer;
