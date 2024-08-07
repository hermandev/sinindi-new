import { createSlice } from "@reduxjs/toolkit";
import { Kegiatan } from "@/libs/db/types";

const initialState = {
  kegiatan: {
    modalAdd: false as boolean,
  },
  pegawai: {
    modalAdd: false as boolean,
    item: null as null | Kegiatan,
  },
};

const kegiatan = createSlice({
  name: "kegiatan",
  initialState,
  reducers: {
    modalAddKegiatan: (state, action) => {
      if (action) {
        state.kegiatan.modalAdd = action.payload;
      }
    },
    modalAddPegawaiKegiatan: (state, action) => {
      if (action) {
        state.pegawai.modalAdd = action.payload.state;
        state.pegawai.item = action.payload.item;
      }
    },
  },
});

export const { modalAddKegiatan, modalAddPegawaiKegiatan } = kegiatan.actions;
export default kegiatan.reducer;
