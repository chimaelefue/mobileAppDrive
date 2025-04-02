import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NavigationProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";

interface NavbarProps {
    navigation: DrawerNavigationProp<ParamListBase>;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigation, onNotificationPress, onProfilePress }) => {
  return (
    <View style={styles.navbar}>
      {/* Menu Icon */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" size={28} color="black" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchbar}>
        <MaterialIcons name="search" size={20} color="gray" />
        <TextInput placeholder="Search Queue" style={styles.searchinput} />
      </View>

      {/* Notifications */}
      <TouchableOpacity onPress={onNotificationPress} style={{ position: "relative" }}>
        <MaterialIcons name="notifications-none" size={35} color="#797472" />
        <View style={styles.countWrapper}>
          <Text style={styles.count}>4</Text>
        </View>
      </TouchableOpacity>

      {/* Profile Icon */}
      <TouchableOpacity onPress={onProfilePress} style={{ marginLeft: 10 }}>
        <View style={styles.profile}>
          <Text style={styles.profileName}>J</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

// Styles
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#A9B2BA",
    paddingBottom: 20,
    paddingTop: 80,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
  searchinput: {
    flex: 1,
    marginLeft: 5,
    height: 40,
  },
  countWrapper: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    color: "white",
    fontSize: 15,
  },
  profile: {
    width: 32,
    height: 32,
    backgroundColor: "#D0E8D6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    color: "#21714B",
    fontWeight: "bold",
    fontSize: 17,
  },
});
