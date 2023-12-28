import { StyleSheet, Text, View } from "react-native";
import React from "react";

//home screen components
import HomeScreenHeader from "../molecules/HomeScreenHeader";
import OfferCarousel from "../molecules/OfferCarousel";
import SearchBar from "../atoms/SearchBar";
import CategorySection from "../molecules/CategorySection";
import ProductsSection from "../molecules/ProductsSection";

import { logout } from "../../store/slices/authSlice";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreenContainer}>
      <HomeScreenHeader logout={logout} />
      <SearchBar navigation={navigation} />
      <OfferCarousel />
      <CategorySection />
      <ProductsSection />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
