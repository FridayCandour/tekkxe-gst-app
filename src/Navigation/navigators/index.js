import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme, lightTheme, darkTheme } from "Themes";
// import TabStacks from "./TabStacks";
import  DrawerStack  from "./DrawerStack";
export default function AppNavigator() {
  const theme = useTheme();
  return (
    // <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
      //  {/* <TabStacks />  */}
       <DrawerStack />
    //  {/* </NavigationContainer> */}
  );
}
