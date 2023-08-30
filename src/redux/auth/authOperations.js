import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../shared/api/index";
import { auth } from "@api";

export const userRegister = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    return await auth.register(data);
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.message);
  }
});

export const userLogin = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    return await auth.login(data);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userLogOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    await auth.logout();
    return;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const { token } = store.auth;
      return await auth.getCurrent(token);
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
