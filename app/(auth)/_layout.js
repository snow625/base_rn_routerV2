import { Link, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StatusBar } from "react-native";
import { headerOptions, colors } from "@styles";
import { getAuthStore } from "@redux/auth/authSelector";
import { useSelector } from "react-redux";

export default AuthLayout = () => {
  const { token, loading } = useSelector(getAuthStore);

  const screenOptions = (loading) => ({
    headerRight: () => (
      <Link disabled={loading} href="/(auth)/register">
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: "bold",
              // backgroundColor: "red",
            }}
          >
            Register
          </Text>
          <AntDesign name="arrowright" size={18} color="white" />
        </View>
      </Link>
    ),
  });

  return (
    <>
      <Stack screenOptions={headerOptions}>
        <Stack.Screen
          name="index"
          options={{
            title: "Sign in",
            ...screenOptions(loading),
            headerShown: token ? false : true,
          }}
        />
        <Stack.Screen name="register" options={{ title: "Back to Login" }} />
      </Stack>
      <StatusBar barStyle="light-content" />
    </>
  );
};
