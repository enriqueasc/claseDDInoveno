import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import HomeScreen from "../../../screen/Home/HomeScreen"
import FavoritesScreen from "../../../screen/FavoritesScreen"
import AccountScreen from "../../../screen/AccountScreen"
import SettingsScreen from "../../../screen/SettingsScreen"
import Awesomefrom from "react-native-vector-icons/FontAwesome"
import { styles } from "./TabNavigation.styles.js"
import logo from "../../../assets/images/tab.png"
import { Image } from "react-native"
import RickAndMortyApi from "../../../api/rm"
import StackNavigation from "../StackNavigation/StackNavigation"

export default function TabNavigation() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="StackNavigation"
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={logo}
              style={{ width: 90, height: 90 }}
            />
          ),
          tabBarLabel: "",
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
        }}
      />
    </Tab.Navigator>
  )
}

const setIcon = (route, routeStatus) => {
  let iconName = ""
  let color = "#79B547"

  if (routeStatus.focused) {
    color = "red"
  }

  if (route.name === "Favorites") {
    iconName = "heart"
  }
  if (route.name === "Account") {
    iconName = "user"
  }

  return (
    <Awesomefrom
      name={iconName}
      size={24}
      color={color}
      style={styles.icon}
    />
  )
}
8
