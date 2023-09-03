import { Tabs } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "List",
          headerTitle: "Home Screen",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
          // tabBarIcon: ({ color, size }) => (
          //   // <FontAwesome name="check-circle" size={size} color={color} />
          //   <AntDesign name="stepforward" size={24} color="black" />
          // ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Account",
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
            // <AntDesign name="stepbackward" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: "News",
          headerShown: false,
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => (
            //<FontAwesome name="font-awesome" size={24} color="black" />r={color} />
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
