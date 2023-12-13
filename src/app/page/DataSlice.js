import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://dpg.gg/test/calendar.json',
  headers: {
    "Content-Type": "application/json",
  }
});

export const getData = createAsyncThunk(
  "data/getData",
  async () => {
    try {
      const response = await axiosInstance.get();
      return response.data;
    } catch (error) {
      console.log("get data error ", error);
      throw error;
    }
  }
);

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;