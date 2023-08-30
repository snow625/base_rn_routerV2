import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button, TextField } from "@components";

import { useSelector } from "react-redux";
import { getUserToken, getAuthStore } from "@redux/auth/authSelector";

import { userLogin, getUser } from "@redux/auth/authOperations";

import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link } from "expo-router";

const initState = {
  loginForm: {
    email: "",
    password: "",
  },
};

const index = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initState);

  const token = useSelector(getUserToken);

  const { loading, error } = useSelector(getAuthStore);

  const onLogin = useCallback(
    (loginForm) => {
      // console.log(loginForm);

      // setState(initState);
      // Keyboard.dismiss();
      // isAuth: true, user: payload.user, token: payload.token
      dispatch(userLogin(loginForm));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (value, stateName) => {
      setState((prev) => ({ ...prev, loginForm: { ...prev.loginForm, [stateName]: value } }));
    },
    [setState]
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const {
    loginForm: { email, password },
  } = state;

  return (
    <>
      {loading && (
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Loading...</Text>
        </View>
      )}
      {!loading && !token && (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1, justifyContent: "center", backgroundColor: "#55628099" }}
          >
            <StatusBar backgroundColor="#55628099" />
            <View style={{}}>
              <ScrollView
                //contentContainerStyle={{}}
                //keyboardDismissMode="none"
                // horizontal
                // pagingEnabled
                // showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                <View style={{}}>
                  {/* <View
                style={{
                  // paddingHorizontal: 50,
                  paddingVertical: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "blue",
                    height: 550,
                    width: 300,
                    // backgroundColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text>LOGO</Text>
                </View>
              </View> */}

                  <View style={{ gap: 20, padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 45,
                        color: "white",
                        textAlign: "center",
                        fontWeight: "500",
                        marginBottom: 20,
                      }}
                    >
                      Sign in
                    </Text>

                    <TextField
                      disabled={loading}
                      value={email}
                      error={false}
                      mode="flat"
                      stateName="email"
                      label="Email"
                      onChange={handleChange}
                    />
                    <TextField
                      disabled={loading}
                      value={password}
                      mode="flat"
                      secureTextEntry
                      stateName="password"
                      label="Password"
                      onChange={handleChange}
                    />

                    <Button
                      mode={loading ? `text` : "contained"}
                      loading={loading}
                      disabled={loading || !(password && email)}
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderColor: "white",
                        fontSize: 25,
                        marginTop: 20,
                        zIndex: 10,
                      }}
                      text={loading ? `Loading` : "Login"}
                      onPress={() => onLogin(state.loginForm)}
                      labelStyle={{ fontSize: 18, padding: 3, paddingHorizontal: 55 }}
                    />
                    <Link
                      style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "grey",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        backgroundColor: "white",
                        borderRadius: 15,
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 25,
                      }}
                      href="/(auth)/register"
                    >
                      To Register
                    </Link>
                  </View>
                </View>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </>
  );
};

export default index;
