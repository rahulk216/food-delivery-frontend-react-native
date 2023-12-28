import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

import { obj } from "../../assets/tempAssets/drawer-pics";

const OfferCarousel = () => {
  return (
    <View style={styles.offerContainer}>
      <Text style={styles.offerHeading}>News & Offers</Text>
      <FlatList
        data={obj}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: 250,
              height: 150,
              flex: 1,
              borderRadius: 10,
              marginRight: 10,
              ...styles.image,
            }}
          />
        )}
        style={styles.imageContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, key) => key}
      />
    </View>
  );
};

export default OfferCarousel;

const styles = StyleSheet.create({
  offerContainer: {
    marginVertical: 20,
  },
  offerHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    gap: 20,
  },
  image: { flex: 1, gap: 20, marginTop: 10 },
});
