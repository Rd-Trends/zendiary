import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        <Text>Zen</Text>
        <Text style={styles.logoTextBlue}>Diary.</Text>
      </Text>
      <Text style={styles.logoCaption}>Reflect. Write. Thrive.</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    alignItems: "flex-end",
    alignSelf: "center",
  },
  logoText: {
    fontFamily: "archivo-black",
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.17,
    color: colors.secondary.black.base,
  },
  logoTextBlue: {
    color: colors.primary.blue.dark,
  },
  logoCaption: {
    fontFamily: "yellowtail",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.05,
    color: colors.secondary.black.base,
  },
});
