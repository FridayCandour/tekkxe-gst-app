import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme, lightTheme, darkTheme } from "Themes";
import { Explore, Standings, More, Market } from "Screens";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomSidebarMenu from "./CustomSidebarMenu";
import TabStacks from "./TabStacks";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  let theme = useTheme();
  return (
    <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
      <Drawer.Navigator
        initialRouteName="home"
        screenOptions={{
          drawerActiveBackgroundColor: "#3490f3",
          drawerActiveTintColor: "whitesmoke",
          drawerInactiveTintColor: "#333",
          activeTintColor: "#e91e63",
          drawerLabelStyle: {
            marginLeft: -20,
            fontFamily: "Roboto-Medium",
            fontSize: 15,
          },
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="home"
          component={TabStacks}
          options={{
            headerShown: false,
            title: "Home",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="home-outline"
                size={22}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Standings"
          component={Standings}
          options={{
            headerShown: false,
            title: "courses",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="book-outline"
                size={22}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Market"
          component={Market}
          options={{
            headerShown: false,
            title: "premiun",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="cart-outline"
                size={22}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="More"
          component={More}
          options={{
            headerShown: false,
            title: "progress",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="timer-outline"
                size={22}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
