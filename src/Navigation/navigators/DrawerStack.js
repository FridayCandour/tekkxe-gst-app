import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme, lightTheme, darkTheme } from "Themes";
<<<<<<< HEAD
import { More, Advert, Course, Book, ArticleDetail } from "Screens";
=======
import { Standings, More, Market, quizScreen } from "Screens";
>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomSidebarMenu from "./CustomSidebarMenu";
import HomeStacks from "./homeStacks";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  let theme = useTheme();

  return (
    <NavigationContainer theme={theme.mode === "dark" ? darkTheme : lightTheme}>
      <Drawer.Navigator
        initialRouteName="Statistics"
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
        {/* <Drawer.Screen
          name="ArticleDetail"
          component={ArticleDetail}
          options={{
            headerShown: true,
            title: "Business Unihub",
            headerTitleStyle: {
              borderBottomWidth: 2,
              paddingHorizontal: 30,
              borderColor: "grey",
              borderRadius: 8,
            },
            headerTitleAlign: "center",
          }}
        /> */}

        <Drawer.Screen
          name="Statistics"
          component={HomeStacks}
          options={{
            headerShown: false,
<<<<<<< HEAD
=======
            title: "Learn",
            headerTitleAlign: "center",
>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="business-outline"
                size={22}
              />
            ),
          }}
        />

        <Drawer.Screen
<<<<<<< HEAD
          name="advert"
          component={Advert}
          options={{
            headerShown: false,
            title: "Adverts",
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
          name="book"
          component={Book}
          options={{
            headerShown: false,
            title: "Books",
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
          name="Courses"
          component={Course}
=======
          name="Market"
          component={Market}
>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
          options={{
            headerShown: false,
            title: "Courses",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="tv-outline"
                size={22}
              />
            ),
          }}
        />
<<<<<<< HEAD
        <Drawer.Screen
          name="Porfile"
          component={More}
          options={{
            headerShown: false,
            title: "Profile",
            headerTitleAlign: "center",
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                color={focused ? "blue" : "#3490f3"}
                name="people"
                size={22}
              />
            ),
          }}
        />
=======
>>>>>>> c64853ebfd482c13fcde21c6dc2b10d99d8ffa54
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
