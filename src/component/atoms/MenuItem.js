import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";
import RatingStar from "./RatingStar";

const MenuItem = ({ item }) => {
  return (
    <View style={styles.menuItemContainer}>
      <Image
        source={{ uri: require("../../assets/tempAssets/drawer-pics/1.jpg") }}
        style={{
          width: 140,
          height: 80,
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={styles.menuName}>{item?.menu_name}</Text>
        <Text style={styles.menuDesc} numberOfLines={2} ellipsizeMode="tail">
          {item?.menu_description}
        </Text>
        <View style={styles.menuBottomSection}>
          <RatingStar rating={item?.menu_rating} />
          <Pressable style={styles.addToCardIcon}>
            <Text style={styles.addToCardIconText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.PRIMARY,
    borderRadius: 10,
    padding: 5,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
