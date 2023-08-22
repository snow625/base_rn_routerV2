import { Stack } from "expo-router";

export default AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: "Sign In" }} />
      <Stack.Screen name="signOut" options={{ headerShown: true, title: "Sign Out" }} />
    </Stack>
  );
};
