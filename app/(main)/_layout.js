import { Stack } from "expo-router";

export default HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ headerShown: true, title: "MoDAl", presentation: "modal" }}
      />
    </Stack>
  );
};
