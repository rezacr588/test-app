import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import ProfileScreen from "./ProfileScreen";
import MyContext from "./MyContext";
import UserState from "./UsersContext";
import AddScreen from "./AddScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const store = { ...UserState() };

  return (
    <MyContext.Provider value={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default App;
