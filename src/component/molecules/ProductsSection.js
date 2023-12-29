import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MenuItem from "../atoms/MenuItem";

const ProductsSection = ({ topProducts }) => {
  return (
    <View style={styles.productsSectionContainer}>
      <Text style={styles.productSectionHeading}>Top Items</Text>
      <View style={styles.menuItemContainer}>
        <FlatList
          data={topProducts}
          renderItem={({ item }) => <MenuItem item={item} />}
          showsVerticallScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProductsSection;

const styles = StyleSheet.create({
  menuItemContainer: { marginTop: 20, marginBottom: 100 },
  productSectionHeading: { fontSize: 16, fontWeight: "bold" },
  productsSectionContainer: {
    marginVertical: 10,
  },
  productList: {
    height: 250,
  },
});
