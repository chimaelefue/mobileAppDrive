import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/loginPages/SplashScreen";
import LoginScreen from "./components/loginPages/LoginScreen";
import MyDocumentsScreen from "./components/Screens/MyDocumentsScreen";
import Sidebar from "./components/layout/SideBar";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  MainApp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

// Drawer Navigator for Main App
const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
    <Drawer.Screen name="Documents" component={MyDocumentsScreen} />
  </Drawer.Navigator>
);

// Stack Navigator for Auth Flow
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="MainApp" component={DrawerNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Root App Component
const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
