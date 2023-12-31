import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  // status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    flashChat: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { flashChat } = appSlice.actions;

export const selectApp = (state) => state.app.value;

export default appSlice.reducer;
