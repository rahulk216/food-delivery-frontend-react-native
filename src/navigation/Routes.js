import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
