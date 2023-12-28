import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";

const SwitchComponent = ({ text1, text2, value, action }) => {
  return (
    <View style={styles.switchContainer}>
      <Text>{text1}</Text>
      <Switch
        trackColor={{ false: "#ffb09c", true: "#5DBB63" }}
        thumbColor={value ? "#3CB043" : "#ee2400"}
        value={value}
        onValueChange={action}
        style={styles.switch}
      />
      <Text>{text2}</Text>
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    gap: 10,

    alignItems: "center",
    marginVertical: 20,
  },
  switch: {
    height: 20,
  },
});
