import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppNavigator } from "Navigation";
import ThemeManager from "Themes";
<<<<<<< HEAD
import { ActivityIndicator, ImageBackground } from "react-native";
import { Fonts } from "Constants";
=======
import { SafeAreaView, ActivityIndicator } from "react-native";

>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
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
<<<<<<< HEAD
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
=======
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
>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
};

export default App;
