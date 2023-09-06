import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { generalFood } from "../food";
import { supabase } from "../../lib/supabase";
import { SafeAreaView } from "react-native-safe-area-context";

// console.log(generalFood);

const Home = () => {
  // const [products, setProducts] = useState("");

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const { data, error } = await supabase.from("items").select();
  //     if (data) {
  //       setProducts(data);
  //     }
  //   }
  //   fetchProducts();
  // }, []);
  // console.log({ products });
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 30 : 0,
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <View style={styles.icon}>
        <TouchableWithoutFeedback>
          <Image source={require("../../assets/images/hamburger.png")} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Image source={require("../../assets/images/shopping-cart.png")} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
