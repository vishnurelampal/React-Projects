import { createSlice } from "@reduxjs/toolkit";
const loanDataSlice = createSlice({
  name: "loadData",
  initialState: { BasicDetails: {}, LoanDetails: {}, OccupationDetails: {} },
  reducers: {
    setBasicDetailsData: (state, action) => {
      state.BasicDetails = action.payload;
    },
    setLoanData: (state, action) => {
      state.LoanDetails = action.payload;
    },
    setOccupationDetailData: (state, action) => {
      state.OccupationDetails = action.payload;
    },
  },
});
export const { setBasicDetailsData, setLoanData, setOccupationDetailData } =
  loanDataSlice.actions;
export default loanDataSlice.reducer;
