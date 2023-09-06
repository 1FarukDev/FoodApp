import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
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
      style={[
        {
          marginTop: Platform.OS === "android" ? 30 : 0,
          paddingLeft: 30,
          paddingRight: 30,
        },
        styles.container,
      ]}
    >
      {/* Icon */}
      <View style={styles.icon}>
        <TouchableWithoutFeedback>
          <Image source={require("../../assets/images/hamburger.png")} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Image source={require("../../assets/images/shopping-cart.png")} />
        </TouchableWithoutFeedback>
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Delicious</Text>
        <Text style={styles.text}>food for you</Text>
      </View>

      {/* Search Bar */}

      <View style={styles.inputContainer}>
        <View>
          <Image source={require("../../assets/images/search.png")} />
        </View>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
  },
  icon: {
    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    width: "185px",
    fontSize: 40,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 40,
  },
  inputContainer: {
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    width: "80%",
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    // backgroundColor: "black",
    // borderWidth: 1,
    paddingLeft: 10,
    width: "90%",
    marginLeft: 5,
  },
});
