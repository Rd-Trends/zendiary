import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Yellowtail_400Regular } from "@expo-google-fonts/yellowtail";
import { ArchivoBlack_400Regular } from "@expo-google-fonts/archivo-black";
import AnimatedSplashScreen from "../components/AnimateSplashScreen";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    //   gilroy 700
    "gilroy-bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    //   gilroy 500
    "gilroy-medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    //   gilroy 400
    "gilroy-regular": require("../assets/fonts/Gilroy-Regular.ttf"),

    //italics
    "gilroy-bold-italic": require("../assets/fonts/Gilroy-BoldItalic.ttf"),
    "gilroy-medium-italic": require("../assets/fonts/Gilroy-MediumItalic.ttf"),
    "gilroy-regular-italic": require("../assets/fonts/Gilroy-RegularItalic.ttf"),

    // yellowtail
    yellowtail: Yellowtail_400Regular,

    // archivo black
    "archivo-black": ArchivoBlack_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AnimatedSplashScreen>
      <Stack />
    </AnimatedSplashScreen>
  );
}
