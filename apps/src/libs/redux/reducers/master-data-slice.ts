import { Pegawai } from "@/libs/db/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pegawai: {
    add: false as boolean,
    update: false as boolean,
    item: null as Pegawai | null,
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
    modalUpdatePegawai: (state, action) => {
      if (action) {
        state.pegawai.update = action.payload.state;
        state.pegawai.item = action.payload.item;
      }
    },
  },
});

export const { modalAddPegawai, modalUpdatePegawai } = masterData.actions;
export default masterData.reducer;
