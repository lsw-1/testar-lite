import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Test from "./Test";

const main = createBottomTabNavigator(
  {
    Home: Test,
    Settings: Test,
    About: Test
  },
  {
    tabBarOptions: {
      inactiveTintColor: "#666",
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#fafafa"
      }
    }
  }
);

export default createAppContainer(main);
