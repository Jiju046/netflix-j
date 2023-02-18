import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',  //create user section in store
  initialState:{
    user:null
  },

  reducers: {
    login: (state,action) => {
      state.user=action.payload;
    },
    logout: (state) => {
      state.user=null;
    }
  },
  
});

export const { login, logout} = userSlice.actions; //login and logout are despatched to store

export const selectUser = (state) => state.user.user; //select user is to get stored action from store
//state is the store
export default userSlice.reducer;
