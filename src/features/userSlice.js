import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    // logout: (state, action) => {
    //   state.value -= 1;
    // },
    incrementByAmount: (state) => {
      state.user =  null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { login, logout} = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
