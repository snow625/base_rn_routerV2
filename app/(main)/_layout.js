import { Stack } from "expo-router";

export default MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: "Home" }} />
      <Stack.Screen name="profile" options={{ headerShown: true, title: "Profile" }} />
    </Stack>
  );
};
