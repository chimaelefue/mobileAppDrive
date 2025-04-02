import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; 

// Define props type
type SplashScreenProps = StackScreenProps<RootStackParamList, "Splash">;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp"); // Navigate to Login screen
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/govdrive.png")} style={styles.logo} />
      <Text style={styles.title}>
        <Text style={{ color: '#21714B' }}>GovDrive</Text> <Text style={{ color: '#797472' }}>by GBB</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    // color: "#333",
  },
});

export default SplashScreen;
