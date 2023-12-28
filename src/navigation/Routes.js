import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../utils/utility";
import { validateToken } from "../store/slices/authSlice";

const Stack = createNativeStackNavigator();

function Routes() {
  const dispatch = useDispatch();
  const validateTokenDispatch = () => dispatch(validateToken());
  const { accessToken } = useSelector((state) => state.loginDetails);

  useEffect(() => {
    validateTokenDispatch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!!accessToken ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
