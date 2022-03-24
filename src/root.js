import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppNavigator } from "Navigation";
import ThemeManager from "Themes";
import { SafeAreaView, ActivityIndicator } from "react-native";

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  /* Loading custom fonts in async */
  // const _loadAssetsAsync = async () => {
  //   await Font.loadAsync(Fonts.customFonts);
  //   setAssetsLoaded(true);
  // };

  // useEffect(() => {
  //   _loadAssetsAsync();
  // });

  return  (
    <ThemeManager>
      <AppNavigator />
    </ThemeManager>
  ) 
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
