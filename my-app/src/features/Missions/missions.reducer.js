import { createSlice } from "@reduxjs/toolkit";
import * as asyncActions from "./missions.actions";

const initialState = {
  missions: [],
  missionsFilters: {},
};

const slice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    setMissionsFilters(state, action) {
      state.missionsFilters = { ...state.missionsFilters, ...action.payload };
    },
  },
  extraReducers: {
    [asyncActions.findMissions.fulfilled]: (state, action) => {
      state.missions = action.payload || initialState.missions;
    },
  },
});

export default slice;

export const { name, actions, reducer } = slice;
