import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const slice = createSlice({
  name: "favourites",
  initialState: {},
  reducers: {
    setFav: (state, { payload }: PayloadAction<any>) => {
      // TODO
    },
    unsetFav: (state, { payload }: PayloadAction<any>) => {
      // TODO
    },
  },
});

export default slice.reducer;

export const { setFav, unsetFav } = slice.actions;

export const selectFavouritePokemon = (state: RootState) => {
  // TODO
  return [];
};
