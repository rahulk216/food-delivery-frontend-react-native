import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import categoryArr from "../../assets/tempAssets/categories/index";
import CategoryItem from "../atoms/CategoryItem";

const CategorySection = () => {
  return (
    <View>
      <Text style={styles.categorySectionText}>Categories</Text>
      <FlatList
        data={categoryArr}
        renderItem={({ item }) => <CategoryItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, key) => key}
        style={styles.catgeoryList}
      />
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  categorySectionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  catgeoryList: {
    marginVertical: 20,
  },
});
