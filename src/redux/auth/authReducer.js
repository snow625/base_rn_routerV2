import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase(userLogin.pending, pending);
  //   builder.addCase(userLogin.rejected, rejected);
  //   builder.addCase(userLogin.fulfilled, (store, { payload }) => {
  //     const { auth_filter_id, navigation, token, user_data } = payload;
  //     return {
  //       loading: false,
  //       isLogin: true,
  //       error: null,
  //       auth_filter_id,
  //       navigation,
  //       token,
  //       user_data,
  //     };
  //   });

  //   builder.addCase(getUser.pending, pending);
  //   builder.addCase(getUser.rejected, (store, { payload }) => {
  //     return {...initialState}
  //   });
  //   builder.addCase(getUser.fulfilled, ({ token }, { payload }) => {
  //     const { auth_filter_id, navigation, user_data } = payload;
  //     return {
  //       loading: false,
  //       isLogin: true,
  //       error: null,
  //       auth_filter_id,
  //       navigation,
  //       token,
  //       user_data,
  //     };
  //   });

  //   builder.addCase(userLogOut.pending, pending);
  //   builder.addCase(userLogOut.rejected, rejected);
  //   builder.addCase(userLogOut.fulfilled, (store) => ({
  //     ...initialState,
  //   }));
  // },

  reducers: {
    signUser: (store, { payload }) => {
      return { ...store, user: payload.user, token: payload.token };
    },
    signOut: () => initialState,
  },
});

export const { signUser, signOut } = authSlice.actions;

export default authSlice.reducer;
