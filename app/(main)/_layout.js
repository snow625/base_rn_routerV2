import { Stack } from "expo-router";
import { headerOptions } from "@styles";
import { StatusBar } from "react-native";

export default HomeLayout = () => {
  return (
    <>
      <Stack screenOptions={headerOptions}>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ headerShown: true, title: "MoDAl", presentation: "modal" }}
        />
      </Stack>
      <StatusBar barStyle="light-content" />
    </>
  );
};
