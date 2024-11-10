import { createSlice } from "@reduxjs/toolkit";

interface IUserStateProps{
    user:null
}

const initialState:IUserStateProps = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});
