import { configureStore } from "@reduxjs/toolkit";
import dedottagReduser from "./dedottagReduser.js";

export default configureStore({
  reducer: {
    dedottag: dedottagReduser,
  },
});
