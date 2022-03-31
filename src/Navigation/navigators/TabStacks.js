import React from "react";
import Tabs from "./Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Registration, ArticleDetail, ClassRoom, quizScreen } from "Screens";

const Stack = createStackNavigator();

const TabStacks = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ClassRoom"
      component={ClassRoom}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ArticleDetail"
      component={ArticleDetail}
      options={{
        headerShown: true,
        title: "Tekkxe English post",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="quizScreen"
      component={quizScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TabStacks;
