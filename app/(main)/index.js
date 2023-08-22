import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/authReducer";
import { Button } from "@components";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      {/* <Button
        onPress={() => {
          dispatch(signOut());
        }}
        title="Log Out"
      /> */}
      <Button
        text="Log Out"
        onPress={() => {
          dispatch(signOut());
        }}
      />
    </View>
  );
};

export default Home;
