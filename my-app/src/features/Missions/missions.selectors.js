import reducers from "./missions.reducer";
export const selectReducer = (state) => state[reducers.name];
export const selectMissions = (state) => selectReducer(state).missions;
export const selectFilters = (state) => selectReducer(state).missionsFilters;
