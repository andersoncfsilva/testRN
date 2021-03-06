import React from "react";
import { DrawerNavigator } from "react-navigation";
import SideBar from './components/sidebar/index'
import Home from './components/home'

const MainDrawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawer;