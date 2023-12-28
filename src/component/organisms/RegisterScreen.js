import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import InteractionButton from "../atoms/InteractionButton";
import { colors } from "../../utils/constants";

const RegisterScreen = ({ navigation }) => {
  const [checkBoxSelected, setCheckBoxSelected] = useState(false);

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.mainHeading}>Create A New Account!</Text>
      <Text style={styles.subHeading}>
        Sign up now to create a new account and experience a new catering
        service!!
      </Text>
      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <View style={styles.rememberSection}>
          <View style={styles.rememberMeContainer}>
            <CheckBox
              value={checkBoxSelected}
              onValueChange={() => setCheckBoxSelected(!checkBoxSelected)}
              style={styles.checkbox}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <Text>Forgot Password?</Text>
        </View>
        <InteractionButton
          title="REGISTER"
          action={() => {}}
          styleProp1={styles.button}
          styleProp2={styles.text}
        />
      </View>
      <Text style={styles.accountExists}>
        Already have an account?{" "}
        <TouchableOpacity
          style={styles.goToRegister}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    textAlign: "center",
    marginTop: 20,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  rememberSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  loginBox: {
    width: "100%",
  },
  input: {
    justifyContent: "center",
    alignItems: "stretch",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 20,
    borderColor: "#8F8F8F",
    marginTop: 7,
    color: "#8F8F8F",
  },
  inputContainer: {
    marginTop: 30,
  },
  label: {
    color: "#8F8F8F",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F08732",
    marginTop: 30,
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  accountExists: {
    marginTop: 20,
  },
  goToRegister: {
    color: "#F08732",
  },
  rememberMeContainer: {
    flex: 1,
    flexDirection: "row",
  },
  rememberMeText: {
    paddingLeft: 10,
  },
  checkbox: {
    backgroundColor: colors.PRIMARY,
  },
});
