import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  passwordLength: 10,
};

let PASSWORD_LENGTH_SECTION_SLICER = createSlice({
  name: "password length",
  initialState,
  reducers: {
    changeLength: (state, action) => {
      state.passwordLength = +action.payload;
    },
  },
});

export let { changeLength } = PASSWORD_LENGTH_SECTION_SLICER.actions;
export default PASSWORD_LENGTH_SECTION_SLICER.reducer;
