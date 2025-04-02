import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Platform, 
  Keyboard,
  ScrollView
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Alert } from "react-native";


type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (email && password) {
      navigation.replace("Splash"); // Navigate to Splash Screen
    } else {
      Alert.alert("Please enter valid credentials");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Background Image (Position Absolute) */}
          <Image source={require("../../assets/abj.png")} style={styles.backgroundImage} />

          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }} 
            keyboardShouldPersistTaps="handled"
          >
            {/* Login Card */}
            <View style={styles.card}>
              {/* Logo */}
              <Image source={require("../../assets/logoGalaxy.png")} style={styles.logo} />

              <Text style={styles.title}>1Government Cloud</Text>
              <Text style={styles.subtitle}>Towards the Digitalization of the Public Service</Text>

              {/* Input Fields */}
              <View style={styles.inputWrapper}>
                {/* MDA Input */}
                <View style={styles.inputContainer}>
                  <TextInput style={styles.input} placeholder="Enter your MDA" />
                  <Text style={styles.suffix}>.gov.ng</Text>
                </View>

                {/* Email Input */}
                <TextInput
                  style={styles.inputField}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />

                {/* Password Input */}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={20} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Remember Credentials & Reset Password */}
              <View style={styles.row}>
                <TouchableOpacity onPress={() => setRemember(!remember)} style={styles.checkboxContainer}>
                  <View style={[styles.checkbox, remember && styles.checkboxChecked]} />
                  <Text style={styles.checkboxText}>Remember Credentials</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.resetPassword}>Reset Password?</Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>

              {/* Footer */}
              <Text style={styles.footer}>
                Need help? If you haven't received your token, fill out the form{" "}
                <Text style={styles.link}>here</Text> or contact your IT department for support.
              </Text>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  backgroundImage: {
    position: "absolute",  // Ensures image stays in the background
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  card: {
    bottom:50,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: "center",
   
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#006400",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#006400",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "100%",
    paddingVertical: 8
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEF0F4",
    borderRadius: 7,
    paddingHorizontal: 6,
    backgroundColor: "#EEF0F4",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    color: "#333",
    paddingVertical: 10
  },
  inputField: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EEF0F4",
    borderRadius: 7,
    padding: 14,
    backgroundColor: "#EEF0F4",
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  suffix: {
    color: "green",
    fontWeight: "bold",
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:5
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: "green",
  },
  checkboxText: {
    fontSize: 12,
    color: "gray",
  },
  resetPassword: {
    color: "red",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "green",
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 12,
    color: "gray",
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
