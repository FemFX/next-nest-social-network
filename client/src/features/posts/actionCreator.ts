import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../utils/axios";
import { IPost } from "../../types/post";

export const fetchPostsAction = createAsyncThunk(
  "posts/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IPost[]>("http://localhost:4000/post");
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
