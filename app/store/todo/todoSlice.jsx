"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoVal } from "./todoService";

const initialState = {
  isLoading: null,
  dataVal: [],
  error: null,
};

export const todoData = createAsyncThunk(
  "todo/todoData",
  async (_, thukAPI) => {
    try {
      return await todoVal();
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thukAPI.rejectWithValue(message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(todoData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(todoData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataVal = action.payload;
    });
    builder.addCase(todoData.rejected, (state, action) => {
      state.error = true;
      state.error = action.payload || "Something went wrong";
    });
  },
});

export default todoSlice.reducer;
