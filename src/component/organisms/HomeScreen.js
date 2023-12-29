import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

//home screen components
import Loader from "../atoms/Loader";
import SearchBar from "../atoms/SearchBar";
import CategorySection from "../molecules/CategorySection";
import HomeScreenHeader from "../molecules/HomeScreenHeader";
import OfferCarousel from "../molecules/OfferCarousel";
import ProductsSection from "../molecules/ProductsSection";

import { logout } from "../../store/slices/authSlice";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../store/slices/menuSlice";
import { colors } from "../../utils/constants";

const renderLoader = () => {
  return (
    <Loader
      styleProp={{
        flex: 1,
        alignitems: "center",
        justifyContent: "center",
      }}
      size="large"
      color={colors.PRIMARY}
    />
  );
};

const HomeScreen = ({ navigation }) => {
  //dispatch
  const dispatch = useDispatch();
  const getMenuListDispatch = () => dispatch(getAllMenu());

  //selectors
  const { userDetails } = useSelector((state) => state.loginDetails);
  const {
    menuList,
    isLoading: menuListIsLoading,
    error: menuListError,
  } = useSelector((state) => state.menuDetails);

  const topProducts = menuList?.filter((menu) => menu.topItem);

  useEffect(() => {
    getMenuListDispatch();
  }, [dispatch]);

  return (
    <View style={styles.homeScreenContainer}>
      {menuListIsLoading ? (
        renderLoader()
      ) : (
        <>
          <HomeScreenHeader logout={logout} userDetails={userDetails} />
          <SearchBar
            action={() => navigation.navigate("Search")}
            menuList={menuList}
          />
          <OfferCarousel />
          <CategorySection />
          <ProductsSection topProducts={topProducts} />
        </>
      )}
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
