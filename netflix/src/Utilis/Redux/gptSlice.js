import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    gptFlag: false,
  },
  reducers: {
    setGptFlag: (state) => {
      state.gptFlag = !state.gptFlag;
    },
  },
});
export const { setGptFlag } = gptSlice.actions;
export default gptSlice.reducer;
