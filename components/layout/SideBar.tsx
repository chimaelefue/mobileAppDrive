import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0A3347",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  highlightItem: {
    backgroundColor: "#E2B68230",
    borderRadius: 8,
  },
  storageContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: "#F0F4F8",
    borderRadius: 8,
  },
  storageText: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#ccc",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    backgroundColor: "#0A3347",
  },
  storageUsage: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  manageStorage: {
    fontSize: 12,
    color: "#0A3347",
    fontWeight: "bold",
    marginTop: 4,
  },
});

const Drawer = createDrawerNavigator();

const menuItems = [
  { label: "My Documents", icon: <Feather name="file-text" size={20} color="#0A3347" /> },
  { label: "Collaborations", icon: <Ionicons name="people-outline" size={20} color="#0A3347" /> },
  { label: "General Documents", icon: <Feather name="folder" size={20} color="#0A3347" /> },
  { label: "Application Documents", icon: <Feather name="folder" size={20} color="#0A3347" /> },
  { label: "Recent", icon: <MaterialIcons name="history" size={20} color="#0A3347" /> },
  { label: "Starred", icon: <MaterialIcons name="star-border" size={20} color="#0A3347" />, style: styles.highlightItem },
  { label: "Trash", icon: <MaterialIcons name="delete" size={20} color="#0A3347" /> },
];

const Sidebar = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: insets.top }}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="folder" size={24} color="white" />
        <Text style={styles.title}>Gov Drive</Text>
      </View>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <DrawerItem key={index} label={item.label} icon={() => item.icon} onPress={() => {}} style={item.style} />
      ))}

      {/* Storage Info */}
      <View style={styles.storageContainer}>
        <Text style={styles.storageText}>Storage</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "77%" }]} />
        </View>
        <Text style={styles.storageUsage}>23.19 GB of 30 GB used</Text>
        <Text style={styles.manageStorage}>Manage storage</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
