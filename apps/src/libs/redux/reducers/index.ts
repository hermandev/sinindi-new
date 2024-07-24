import { combineReducers } from "@reduxjs/toolkit";
import masterData from "./master-data-slice";
import kegiatan from "./kegiatan-slice";
const rootReducer = combineReducers({
  masterData,
  kegiatan,
});

export default rootReducer;
