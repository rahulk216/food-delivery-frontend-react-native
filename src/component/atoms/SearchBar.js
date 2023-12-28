import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";
import Search from "../../assets/search";

const SearchBar = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Test");
        navigation.navigate("Search");
      }}
    >
      <View style={styles.searchBarContainer}>
        <Search style={styles.icon} />
        <TextInput
          style={styles.searchBarInput}
          placeholder="    What would you like to eat?"
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    marginVertical: 10,
    backgroundColor: colors.LIGHT_GREY,
    flexDirection: "row",
    padding: 10,
    gap: 5,
    borderRadius: 10,
  },
  searchBarInput: {
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 10,
    width: "100%",
    color: colors.SECONDARY_TEXT,
    outlineColor: colors.LIGHT_GREY,
    shadowColor: colors.LIGHT_GREY,
  },
});
