import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FAB } from "react-native-paper";
import Navbar from "../layout/NavBar";
import {  useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "../../App"; 

const MyDocumentsScreen = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList, "MainApp">>();
  return (
    <View style={styles.container}>
        {/* Top Navbar */}
        <Navbar navigation={navigation} />

        <View style={styles.titleWrapper}>
            <TouchableOpacity>
                <MaterialIcons name="chevron-left" size={28} color="#77808B" />
            </TouchableOpacity>
            {/* Section Title */}
            <Text style={styles.seectionTitle}>
                My Documents
            </Text>
        </View>

        {/* Empty State */}
        <View style={styles.emptyContainer}>
            <Image source={require("../../assets/empty.png")} style={styles.logo} />
            <Text style={styles.emptyText}>
                There are no files uploaded yet. Click on the button below to start
                uploading files into folders.
            </Text>
        </View>

        {/* Floating Action Button */}
        <FAB
            icon={() => <MaterialIcons name="add" size={26} color="#21714B" />}
            style={styles.fab}
            onPress={() => console.log("Add file")}
        />

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#F9F8F8", 
        paddingBottom:20
       
    },
    sectionWrapper:{
        width:'100%',
        paddingHorizontal: 20
    },
    titleWrapper:{
        display:'flex',
        flexDirection:'row',
        gap:2,
        paddingHorizontal: 15
    },
    seectionTitle:{
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 16,
        color:'#77808B'
    },
    emptyContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    emptyText: {
        marginTop: 10,
        textAlign: "center",
        color: "#333333",
        fontSize: 18,
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: "contain",
    },
    fab:{
        position: "absolute",
        bottom: 50,
        right: 20,
        backgroundColor: "white",
        borderRadius: 50
    }
})

export default MyDocumentsScreen;
