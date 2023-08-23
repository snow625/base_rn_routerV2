import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../shared/api/index";

export const userLogin = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    // return await api.auth.login(data);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userLogOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    // await api.auth.logout();
    return;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      // return await api.auth.getCurrent(auth.token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
