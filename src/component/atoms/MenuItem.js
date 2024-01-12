import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { colors } from "../../utils/constants";
import RatingStar from "./RatingStar";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const MenuItem = ({ item, source }) => {
  //dispatch
  const dispatch = useDispatch();
  const addToCartDispatch = (obj, operation = null) =>
    dispatch(addToCart({ ...obj }, operation));

  //functions
  const handleAddToCart = (obj) => {
    addToCartDispatch(obj, null);
  };

  return (
    <View style={styles.menuItemContainer}>
      <Animated.Image
        source={{
          uri: item.menu_img,
        }}
        style={{
          width: 140,
          height: 90,
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={styles.menuName}>{item?.menu_name}</Text>
        <Text>: {item?.restaurant?.restaurant_name}</Text>
        <Text style={styles.menuDesc} numberOfLines={2} ellipsizeMode="tail">
          {item?.menu_description}
        </Text>
        {source !== "placeorder" ? (
          <View style={styles.menuBottomSection}>
            <RatingStar rating={item?.menu_rating} />
            <TouchableOpacity
              style={styles.addToCardIcon}
              onPress={() => handleAddToCart({ ...item, qty: 1 })}
            >
              <Text style={styles.addToCardIconText}>Add</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={{ fontWeight: "bold", color: colors.PRIMARY }}>
              &#8377;{item.menu_price} x {item.qty} = &#8377;
              {parseInt(item.menu_price) * item.qty}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.BORDER,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#fff",
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuDesc: {
    width: 200,
    marginVertical: 5,
    color: "#8F8F8F",
  },
  menuBottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  addToCardIcon: {
    backgroundColor: colors.PRIMARY,
    width: 80,
    borderRadius: 10,
    padding: 5,
  },
  addToCardIconText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
