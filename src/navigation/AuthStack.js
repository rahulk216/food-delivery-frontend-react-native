import React from "react";

import { LoginScreen, RegisterScreen } from "../";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </>
  );
}
