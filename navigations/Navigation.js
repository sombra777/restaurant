import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopRestaurantsStack from "./TopRestaurantsStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoriteStack";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  const screenOptions = (route, color) => {
    let icoName;
    switch (route.name) {
      case "restaurants":
        icoName = "compass-outline";
        break;
      case "favorites":
        icoName = "heart-outline";
        break;
      case "top-restaurants":
        icoName = "star-outline";
        break;
      case "search":
        icoName = "magnify";
        break;
      case "account":
        icoName = "home-outline";
        break;
    }
    return (
      <Icon type="material-community" name={icoName} size={22} color={color} />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurantes"
        tabBarOptions={{
          tabBarInactiveTintColor: "#442484",
          tabBarActiveTintColor: "#a17dc3",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "top-5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
