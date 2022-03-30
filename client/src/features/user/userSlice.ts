import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../types/user";
import { loginUserAction } from "./actionCreator";
import jwt from "jwt-decode";
import { AppDispatch } from "../../app/store";
import { axios } from "../../utils/axios";

const initialState: IUserState = {
  user: null,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [loginUserAction.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = "";
    },
    [loginUserAction.pending.type]: (state) => {
      state.loading = true;
    },
    [loginUserAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const getUserAction = () => async (dispatch: AppDispatch) => {
  try {
    const user: any = jwt(localStorage.getItem("token") || "");
    const id = user.id;

    const { data } = await axios.post<IUser>("http://localhost:4000/auth/", id);
    dispatch(getUser(data));
  } catch (err: any) {}
};

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
