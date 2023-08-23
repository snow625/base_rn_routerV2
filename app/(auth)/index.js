import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { signUser } from "@redux/auth/authReducer";
import { useDispatch } from "react-redux";
import { Link } from "expo-router";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>login</Text>

      <Button
        title="Login"
        onPress={() => {
          dispatch(signUser({ user: { name: "DEMO" }, token: "21321321321" }));
        }}
      />

      <Link style={{ fontFamily: "mainBold", fontSize: 20 }} href="/(auth)/registration">
        To Registration
      </Link>
      <Link style={{ fontSize: 20 }} href="/(auth)/registration">
        To Registration
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
