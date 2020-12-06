import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import EstudianteStack from "./EstudianteStack";
import JefedeptoStack from "./JefedeptoStack";
import InstructoresStack from "./InstructorStack";
import SubdirectoresStack from "./SubdirectorStack";
import AdministradorStack from "./AdministradorStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="estudiante"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="estudiante"
          component={EstudianteStack}
          options={{ title: "Estudiante" }}
        />
        <Tab.Screen
          name="jefe"
          component={JefedeptoStack}
          options={{ title: "Jefe" }}
        />
        <Tab.Screen
          name="instructor"
          component={InstructoresStack}
          options={{ title: "Instructores" }}
        />
        <Tab.Screen
          name="subdirector"
          component={SubdirectoresStack}
          options={{ title: "Subdirectores" }}
        />
        <Tab.Screen
          name="administrador"
          component={AdministradorStack}
          options={{ title: "Administrador" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "estudiante":
      iconName = "account";
      break;
    case "jefe":
      iconName = "account-group";
      break;
    case "instructor":
      iconName = "account-check";
      break;
    case "subdirector":
      iconName = "book";
      break;
    case "administrador":
      iconName = "chart-bar";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
