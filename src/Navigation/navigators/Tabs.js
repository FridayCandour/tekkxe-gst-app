import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { McTabIcon, McText } from "Components";
import { Images, Colors } from "Constants";
import { Explore, Standings, More, Market } from "Screens";

const Tab = createBottomTabNavigator();

const Tabs = ({ params }) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          paddingBottom: 5,
          flexDirection: "column",
        },
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "blue", //Colors.blue1, //"#3490f3", //"#A0A3BD",
            alignContent: "center",
            justifyContent: "center",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Home
            </McText>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Discover}
              color={focused ? "white" : "#3490f3"} //"#A0A3BD"}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Learn
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Standings}
              color={focused ? "white" : "#3490f3"} //"#A0A3BD"}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              Premiun
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Explore}
              color={focused ? "white" : "#3490f3"} //"#A0A3BD"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <McText
              medium
              size={10}
              color={focused ? Colors.white : "#A0A3BD"}
              style={{
                display: focused ? "flex" : "none",
              }}
            >
              More
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.More}
              color={focused ? "white" : "#3490f3"} //"#A0A3BD"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
