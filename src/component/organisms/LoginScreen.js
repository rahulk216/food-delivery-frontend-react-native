import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";

//component
import InteractionButton from "../atoms/InteractionButton";

const LoginScreen = ({ navigation }) => {
  //state
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //redux
  const dispatch = useDispatch();
  const loginDispatch = (obj) => dispatch(login({ ...obj }));

  const { isLoading, error } = useSelector((state) => state.loginDetails);

  //functions
  const handleFormChange = (event) => {
    let data = { ...credentials };
    data[event.target.name] = event.target.value;
    setCredentials(data);
  };

  const demologin = async () => {
    loginDispatch({
      username: "rahul089",
      password: "12345",
    });
  };

  const loginHandler = async () => {
    loginDispatch({
      username: credentials.username,
      password: credentials.password,
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
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) =>
              setCredentials({ ...credentials, username: text })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) =>
              setCredentials({ ...credentials, password: text })
            }
          />
        </View>
        <InteractionButton
          title="DEMO LOGIN"
          action={() => {
            demologin();
          }}
          styleProp1={styles.button}
          styleProp2={styles.text}
          loading={isLoading}
        />
        <InteractionButton
          title="LOGIN"
          action={() => {
            loginHandler();
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
          <Text>Register</Text>
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
    borderWidth: 1,
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
