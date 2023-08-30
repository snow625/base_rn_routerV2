import { Stack } from "expo-router";

export default HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: "Rooms" }} />
      <Stack.Screen name="[room]" options={{ headerShown: true, title: "Chat" }} />
    </Stack>
  );
};
