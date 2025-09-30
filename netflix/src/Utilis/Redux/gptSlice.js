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
    setGptFlagFalse: (state) => {
      state.gptFlag = false;
    },
  },
});
export const { setGptFlag, setGptFlagFalse } = gptSlice.actions;
export default gptSlice.reducer;
