import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import { colors } from "../styles/colors";
const PenAnimation = require("../assets/images/PenWritingAnimation.gif");

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary.white.base,
  },

  PenAnimationImage: {
    width: 114,
    height: 114,
  },
});
