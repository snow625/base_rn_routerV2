import { Stack } from "expo-router";
import { headerOptions } from "@styles";
export default HomeLayout = () => {
  return (
    <Stack screenOptions={headerOptions}>
      <Stack.Screen name="index" options={{ headerShown: true, title: "Rooms" }} />
      <Stack.Screen name="[room]" options={{ headerShown: true, title: "Chat" }} />
    </Stack>
  );
};
