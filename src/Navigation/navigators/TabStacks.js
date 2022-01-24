import React from "react";
import Tabs from "./Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Registration,
  Explore,
  Standings,
  More,
  ArticleDetail,
  quizScreen,
  ClassRoom,
} from "Screens";

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
      name="More"
      component={More}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Explore"
      component={Explore}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Standings"
      component={Standings}
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
      name="Registration"
      component={Registration}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="quizScreen"
      component={quizScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TabStacks;
