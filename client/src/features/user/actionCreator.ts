import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../utils/axios";

export const loginUserAction = createAsyncThunk(
  "user",
  async (user: any, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/login",
        user
      );

      localStorage.setItem("token", data.token);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

