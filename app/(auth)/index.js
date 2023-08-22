import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { signUser } from "../../redux/auth/authReducer";
import { useDispatch } from "react-redux";

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
    </View>
  );
}

const styles = StyleSheet.create({});
