import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./foodItem";
import foodItem from "./foodItem";
const foods = () => {
  const food = [
    {
      key: 0,
      name: "eba",
      price: "1200",
    },
    {
      key: 1,
      name: "rice",
      price: "1200",
    },
    {
      key: 2,
      name: "iyan",
      price: "1200",
    },
  ];
  return (
    <View>
      <FlatList
        data={food}
        renderItem={({ item }) => <FoodItem item={item} />}
      />
    </View>
  );
};

export default foods;

const styles = StyleSheet.create({});
