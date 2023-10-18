import { configureStore } from "@reduxjs/toolkit";
// reducers
import PASSWORD_LENGTH_SECTION_SLICER from "./components/PasswordLength_section/PASSWORD_LENGTH_SECTION_SLICER";
import checkLinesSlicer from "./components/CheckLines/checkLinesSlicer";

let store = configureStore({
  reducer: {
    passwordLength: PASSWORD_LENGTH_SECTION_SLICER,
    passwordArray: checkLinesSlicer,
  },
});

export default store;
