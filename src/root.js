import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppNavigator } from "Navigation";
import ThemeManager from "Themes";
import { ActivityIndicator, ImageBackground } from "react-native";
import { Fonts } from "Constants";
import { SafeAreaView } from "react-native";
const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(Fonts.customFonts);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <ThemeManager>
      <AppNavigator />
    </ThemeManager>
  ) : (
    <ImageBackground
      source={require("Assets/splash.png")}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
  // : (
  //   <SafeAreaView
  //     style={{
  //       flex: 1,
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <ActivityIndicator size="small"></ActivityIndicator>
  //   </SafeAreaView>
  // );
};

export default App;
