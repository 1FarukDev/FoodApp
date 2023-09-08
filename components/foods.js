import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./foodItem";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
const foods = () => {
  const food = [
    {
      key: 0,
      name: "Veggie Tomato Mix",
      price: "N1,200",
      image: food1,
    },
    {
      key: 1,
      name: "Egg and cucumber",
      price: "N1,200",
      image: food2,
    },
    {
      key: 2,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food3,
    },
  ];
  return (
    <View style={styles.foodList}>
      <FlatList
        data={food}
        renderItem={({ item }) => <FoodItem item={item} />}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default foods;

const styles = StyleSheet.create({
  foodList: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // backgroundColor: "black",
  },
});
