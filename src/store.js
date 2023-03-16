import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/tipCalculator/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
