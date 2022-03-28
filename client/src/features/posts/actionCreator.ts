import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../types/post";

export const fetchPostsAction = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IPost[]>("http://localhost:4000/post");
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
