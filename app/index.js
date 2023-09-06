import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import React, { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";

const Index = () => {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null); // Add an error state

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       let { data: items, error } = await supabase.from("items").select("*");
  //       if (error) {
  //         throw error;
  //       }
  //       setProducts(data);
  //       setError(null); // Clear any previous errors if successful
  //     } catch (error) {
  //       setError("An error occurred while fetching data."); // Handle the error
  //     }
  //   }

  //   fetchProducts();
  // }, []);
  // console.log(products);
  const router = useRouter();
  const navigation = useNavigation();
  const handleImagePress = () => {
    // navigation.navigate("home");
    router.replace("home");
  };
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Link href={"/register"} asChild>
    //     <Pressable>
    //       <Text>Create account</Text>
    //     </Pressable>
    //   </Link>
    // </View>
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={require("../assets/images/cover_image.png")} />
      </View>
      <View style={styles.middleLogo}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require("../assets/images/home_logo.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignContent: "center",
  },
  cover: {
    // flex: 1,
    // position: "relative",
    // alignItems: "center",
    // alignContent: "center",
  },
  middleLogo: {
    position: "absolute",
    left: "25%",
    top: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ffff",
  },
});

export default Index;

// import * as React from "react";
// import { View, StyleSheet } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Ionicons name="md-checkmark-circle" size={32} color="green" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
