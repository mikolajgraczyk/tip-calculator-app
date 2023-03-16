import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    billAmount: "",
    tipSelected: "",
    peopleAmount: "",
    customTip: "",
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
    setCustomTip(state, { payload }) {
        state.customTip = payload;
        state.tipSelected = state.customTip;
    },
    clearCustomTip(state){
        state.customTip = "";
    },
    resetData(state) {
      state.billAmount = "";
      state.tipSelected = "";
      state.peopleAmount = "";
      state.customTip = "";
    },
  },
});

export const {
  insertBill,
  selectTip,
  insertPeopleAmount,
  setCustomTip,
  resetData,
  clearCustomTip,
} = calculatorSlice.actions;

export const selectCalculatorState = (state) => state.calculator;

export const selectBillAmount = (state) =>
  selectCalculatorState(state).billAmount;
export const selectPeopleAmount = (state) =>
  selectCalculatorState(state).peopleAmount;
export const selectSelectedTip = (state) => {
  if (selectCalculatorState(state).tipSelected < 0) {
    return 0;
  }
  return selectCalculatorState(state).tipSelected;
};
export const selectCustomTip = (state) =>
  selectCalculatorState(state).customTip;

export const selectCalculatedTipAmount = (state) => {
  if (selectBillAmount(state) < 0) {
    return 0.0;
  }
  return (selectSelectedTip(state) / 100) * selectBillAmount(state);
};

export const selectTipAmountPerPerson = (state) => {
  switch (true) {
    case selectPeopleAmount(state) >= 1:
      return selectCalculatedTipAmount(state) / selectPeopleAmount(state);
    case selectPeopleAmount(state) === "":
      return selectCalculatedTipAmount(state) / 1;
    case selectPeopleAmount(state) < 0:
      return 0.0;
    default:
      return 0.0;
  }
};

export const selectIsDataInsered = (state) => {
  return Object.values(selectCalculatorState(state)).every(
    (value) => value === ""
  );
};

export default calculatorSlice.reducer;
