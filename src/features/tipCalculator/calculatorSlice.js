import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    billAmount: "",
    tipSelected: "",
    peopleAmount: "",
  },
  reducers: {
    insertBill(state, { payload }) {
      state.billAmount = payload;
    },
    selectTip(state, { payload }) {
      state.tipSelected = payload;
    },
    insertPeopleAmount(state, { payload }) {
      state.peopleAmount = payload;
    },
    resetData(state){
        state.billAmount = "";
        state.tipSelected = "";
        state.peopleAmount = "";
    },
  },
});

export const { insertBill, selectTip, insertPeopleAmount, resetData } = calculatorSlice.actions;

export const selectCalculatorState = (state) => state.calculator;

export const selectBillAmount = (state) => selectCalculatorState(state).billAmount;
export const selectPeopleAmount = (state) => selectCalculatorState(state).peopleAmount;
export const selectSelectedTip = (state) => selectCalculatorState(state).tipSelected;

export const selectCalculateTipAmount = (state) => {
    return selectSelectedTip(state)/100 * selectBillAmount(state);
};

export default calculatorSlice.reducer;
