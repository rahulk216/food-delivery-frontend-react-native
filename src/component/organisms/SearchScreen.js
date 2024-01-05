import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

//components
import MenuItem from "../atoms/MenuItem";
import SearchBar from "../atoms/SearchBar";
import SwitchComponent from "../atoms/SwitchComponent";
import { SafeAreaView } from "react-native";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const {
    menuList,
    isLoading: menuListIsLoading,
    error: menuListError,
  } = useSelector((state) => state.menuDetails);

  const [filteredMenu, setFilteredMenu] = useState(menuList);

  useEffect(() => {
    let filteredMenu = menuList;

    if (isVeg) {
      filteredMenu = filteredMenu.filter((menu) => menu.isVeg);
    }

    if (searchText) {
      filteredMenu = filteredMenu.filter((item) =>
        item.menu_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredMenu(filteredMenu);
  }, [isVeg, searchText, menuList]);

  return (
    <SafeAreaView>
      <View style={styles.SearchScreenContainer}>
        <SearchBar action={() => {}} onChange={(val) => setSearchText(val)} />
        <SwitchComponent
          text1="Both"
          text2="Veg"
          value={isVeg}
          action={() => setIsVeg(!isVeg)}
        />
        <View style={styles.productListContainer}>
          <FlatList
            data={filteredMenu}
            renderItem={({ item }) => <MenuItem item={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={styles.productlist}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  SearchScreenContainer: {
    backgroundColor: "#fff",
    padding: 20,
    height: "100%",
  },
  productListContainer: {
    flex: 1,
    marginBottom: 40,
  },
});
