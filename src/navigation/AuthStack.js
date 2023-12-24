import React from "react";

import { LoginScreen, RegisterScreen } from "../";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </>
  );
}
