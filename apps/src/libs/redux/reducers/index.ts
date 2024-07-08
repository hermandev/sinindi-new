import { combineReducers } from "@reduxjs/toolkit";
import masterData from "./master-data-slice";
const rootReducer = combineReducers({
  masterData,
});

export default rootReducer;
