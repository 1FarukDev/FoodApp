import { StyleSheet, Text, View } from "react-native";
import React from "react";

const foodItem = ({ item }) => {
  return <Text>{item.name}</Text>;
};

export default foodItem;

const styles = StyleSheet.create({});
