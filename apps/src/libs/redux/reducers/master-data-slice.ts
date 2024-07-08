import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pegawai: {
    add: false as boolean,
  },
  jabatan: {
    add: false as boolean,
  },
  pangkat: {
    add: false as boolean,
  },
  golongan: {
    add: false as boolean,
  },
};

const masterData = createSlice({
  name: "masterData",
  initialState,
  reducers: {
    modalAddPegawai: (state, action) => {
      if (action) {
        state.pegawai.add = action.payload;
      }
    },
  },
});

export const { modalAddPegawai } = masterData.actions;
export default masterData.reducer;
