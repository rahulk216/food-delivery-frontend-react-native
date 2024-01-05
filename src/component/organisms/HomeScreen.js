import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

//home screen components
import Loader from "../atoms/Loader";
import CategorySection from "../molecules/CategorySection";
import HomeScreenHeader from "../molecules/HomeScreenHeader";
import Carousel from "../molecules/Carousel";
import ProductsSection from "../molecules/ProductsSection";
import Search from "../../assets/search";

import { logout } from "../../store/slices/authSlice";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../store/slices/menuSlice";
import { colors } from "../../utils/constants";

//new offers obj
import { obj } from "../../assets/tempAssets/drawer-pics";

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
    restaurantList,
    isLoading: menuListIsLoading,
    error: menuListError,
  } = useSelector((state) => state.menuDetails);

  const topProducts = menuList?.filter((menu) => menu.topItem);

  useEffect(() => {
    getMenuListDispatch();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.homeScreenContainer}>
        {menuListIsLoading ? (
          renderLoader()
        ) : (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <HomeScreenHeader logout={logout} userDetails={userDetails} />
              <TouchableOpacity
                style={styles.searchContainer}
                onPress={() => navigation.navigate("Search")}
              >
                <Search style={styles.icon} />
                <Text style={styles.searchPlaceholder}>
                  What would you like to eat?
                </Text>
              </TouchableOpacity>
              <Carousel title="News & Offer" items={obj} compId={0} />
              <Carousel title="Restaurants" items={restaurantList} compId={1} />
              <CategorySection />
              <ProductsSection topProducts={topProducts} />
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 10,
    padding: 10,
  },
  searchPlaceholder: {
    color: colors.SECONDARY_TEXT,
  },
});
