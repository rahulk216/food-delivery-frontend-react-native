import { StyleSheet, View, Switch } from "react-native";
import React, { useState } from "react";

//components
import SearchBar from "../atoms/SearchBar";
import SwitchComponent from "../atoms/SwitchComponent";

const SearchScreen = () => {
  const [isVeg, setIsVeg] = useState(false);
  return (
    <View style={styles.SearchScreenContainer}>
      <SearchBar />
      <SwitchComponent
        text1="Both"
        text2="Veg"
        value={isVeg}
        action={() => setIsVeg(!isVeg)}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  SearchScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
