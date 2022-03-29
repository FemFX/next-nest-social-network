import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostState } from "../../types/post";
import { fetchPostsAction } from "./actionCreator";

const initialState: IPostState = {
  posts: [],
  error: "",
  loading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IPost[]>
    ) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = "";
    },
    [fetchPostsAction.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPostsAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    },
    
  },
});
export default postSlice.reducer;
