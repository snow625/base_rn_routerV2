import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { userLogOut } from "@redux/auth/authOperations";
import { Button } from "@components";
import { Link } from "expo-router";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 30 }}>
      <Button
        text="Log Out"
        onPress={() => {
          dispatch(userLogOut());
        }}
      />

      <Link style={s.link} href="home/profile">
        Profile
      </Link>
      <Link style={s.link} href="/modal">
        Modal
      </Link>
    </View>
  );
};

const s = StyleSheet.create({
  link: {
    fontSize: 20,
    padding: 10,
    color: "white",
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default Home;
