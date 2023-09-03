import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
// import { generalFood } from "../food";
import { supabase } from "../lib/supabase";

// console.log(generalFood);

const foodPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("items").select("*");
      if (data) {
        setProducts(data);
      }
    }
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <View>
      <Text>foodPage</Text>
    </View>
  );
};

export default foodPage;

const styles = StyleSheet.create({});
