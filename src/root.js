import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppNavigator } from "Navigation";
import ThemeManager from "Themes";
import { ActivityIndicator, ImageBackground } from "react-native";
import { Fonts } from "Constants";
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
};

export default App;
