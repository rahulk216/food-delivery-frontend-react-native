import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../utils/constants";

//component
import InteractionButton from "../atoms/InteractionButton";
import { loginService } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";

const LoginScreen = ({ navigation }) => {
  const [checkBoxSelected, setCheckBoxSelected] = useState(false);

  //redux
  const dispatch = useDispatch();
  const loginDispatch = (obj) => dispatch(login({ ...obj }));

  const { isLoading, error, accessToken } = useSelector(
    (state) => state.loginDetails
  );

  const demologin = async () => {
    loginDispatch({
      username: "mich089",
      password: "123452",
    });
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.mainHeading}>Hello, Welcome back!</Text>
      <Text style={styles.subHeading}>
        Sign in now to access your account and start ordering food from app!!
      </Text>
      <View style={styles.loginBox}>
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
        <InteractionButton
          title="LOGIN"
          action={() => {
            demologin();
          }}
          styleProp1={styles.button}
          styleProp2={styles.text}
          loading={isLoading}
        />
      </View>
      <Text style={styles.accountExists}>
        Don't have an account?{" "}
        <TouchableOpacity
          style={styles.goToRegister}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;

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
    backgroundColor: colors.PRIMARY,
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
    color: colors.PRIMARY,
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

//#F08732
