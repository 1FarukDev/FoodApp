import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs
      tabBarOptions={{
        tabBarActiveTintColor: "#FA4A0C",
        tabBarLabel: "",
        headerTitle: "Home Screen",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          headerTitle: "Home Sreen",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            //<FontAwesome name="font-awesome" size={24} color="black" />r={color} />
            <FontAwesome name="heart-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
            // <AntDesign name="stepbackward" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarLabel: "",
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-timer-outline" size={24} color={color} />
            // <AntDesign name="stepbackward" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};
