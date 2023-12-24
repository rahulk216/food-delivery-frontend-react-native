import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Go to Login"
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
