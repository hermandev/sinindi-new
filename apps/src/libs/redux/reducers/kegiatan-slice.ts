import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kegiatan: {
    modalAdd: false as boolean,
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
  },
});

export const { modalAddKegiatan } = kegiatan.actions;
export default kegiatan.reducer;
