import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainView: false,
  skillView: false,
  referenceView: false,
  skillRef: null,
  showMoreButtonView: false,
};

const dedottagSlice = createSlice({
  name: "dedottag",
  initialState,
  reducers: {
    mainViewAction(state, action) {
      state.mainView = action.payload;
    },
    skillViewAction(state, action) {
      state.skillView = action.payload;
    },
    refenceViewAction(state, action) {
      state.referenceView = action.payload;
    },
    addSkillRef(state, action) {
      state.referenceView = action.payload;
    },
    addMoreButtonView(state, action) {
      state.showMoreButtonView = action.payload;
    },
  },
});

export const {
  skillViewAction,
  mainViewAction,
  refenceViewAction,
  addSkillRef,
  addMoreButtonView,
} = dedottagSlice.actions;

export default dedottagSlice.reducer;
