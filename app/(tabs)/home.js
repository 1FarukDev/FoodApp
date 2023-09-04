import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";

const home = () => {
  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        Platform.OS === "android" ? { marginTop: 24 } : null,
        styles.container,
      ]}
    >
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black"
    padding: 30,
  },
});
