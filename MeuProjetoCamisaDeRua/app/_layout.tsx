// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, View, Text } from "react-native";

// Telas
import LoginScreen from "./LoginScreen";

// Telas fake para teste
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <StatusBar barStyle="default" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={RegisterScreen}
          options={{ title: "Registro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
