import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="envelope" size={24} color={color} />,
          title: "Messages",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
