import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react"; // Don't forget to import React

export default () => {
  return (
    <Tabs
    // tabBarOptions={{
    //   activeTintColor: "#FA4A0C", // Set the active tab icon color here
    //   tabBarLabel: "",
    //   headerTitle: "Home Screen",
    // }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          headerShown: false,
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
            <FontAwesome name="heart-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-timer-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
