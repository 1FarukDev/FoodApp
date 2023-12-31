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
import Foods from "../../components/foods";
import Drinks from "../../components/drinks";
import Sauce from "../../components/sauce";
import Snacks from "../../components/snacks";

// console.log(generalFood);

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const switchComponent = (componentNumber) => {
    setActiveComponent(componentNumber);
  };

  const handlePress = () => {
    console.log("Hello World");
  };
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
        <TouchableWithoutFeedback onPress={handlePress}>
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
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      {/* Categories */}

      <View style={styles.categoryContainer}>
        <View style={styles.authTextWrapper}>
          <TouchableWithoutFeedback onPress={() => switchComponent(1)}>
            <Text style={styles.categoryText}>Foods</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{}}>
          <TouchableWithoutFeedback onPress={() => switchComponent(2)}>
            <Text style={styles.categoryText}>Drink</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{}}>
          <TouchableWithoutFeedback onPress={() => switchComponent(3)}>
            <Text style={styles.categoryText}>Snacks</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{}}>
          <TouchableWithoutFeedback onPress={() => switchComponent(4)}>
            <Text style={styles.categoryText}>Sauce</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      {/* Wants to render the category components */}
      <View style={styles.activeComponent}>
        {activeComponent === 1 && <Foods />}
        {activeComponent === 2 && <Drinks />}
        {activeComponent === 3 && <Snacks />}
        {activeComponent === 4 && <Sauce />}
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
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  categoryText: {
    color: "#9A9A9D",
    fontSize: 19,
  },
  authTextWrapper: {
    borderBottomWidth: 2,
    borderColor: "#FA4A0C",
    // width: 50,
    paddingBottom: 5,
  },
  activeComponent: {
    marginTop: 40,
  },
});
