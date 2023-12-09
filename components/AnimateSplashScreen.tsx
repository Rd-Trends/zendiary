import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "expo-router";
import { colors } from "../styles";
import Logo from "./Logo";
const PenAnimation = require("../assets/images/PenWritingAnimation.gif");

type AnimatedSplashScreenProps = {
  children: React.ReactNode;
};

function AnimatedSplashScreen({ children }: AnimatedSplashScreenProps) {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // ready app after 1s
    let timeOut = setTimeout(() => {
      setIsAppReady(true);
      SplashScreen.hideAsync();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (!PenAnimation) {
    return null;
  }

  return (
    <>
      {isAppReady && children}
      {!isAppReady && (
        <View style={styles.container}>
          <Image source={PenAnimation} style={styles.PenAnimationImage} />
          <Text style={{ fontFamily: "gilroy-bold", fontSize: 20 }}>
            <Logo />
          </Text>
        </View>
      )}
    </>
  );
}

export default AnimatedSplashScreen;

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
