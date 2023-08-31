import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { headerOptions } from "@styles";
export default () => {
  // #55628099
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        ...headerOptions,
        tabBarStyle: { backgroundColor: "#556280" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="home" size={24} color={focused ? "#fff" : color} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="user-alt" size={24} color={focused ? "#fff" : color} />
          ),
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="envelope" size={24} color={focused ? "#fff" : color} />
          ),
          title: "Messages",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
