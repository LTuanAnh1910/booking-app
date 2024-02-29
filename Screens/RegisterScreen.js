import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigation = useNavigation();

  const register = () => {
    if (email === "" || password === "" || phoneNo === "") {
      Alert.alert("Invalide Details", "Please enter all your fields", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${uid}`), {
          email: user,
          phone: phoneNo,
        });
      }
    );

    setEmail("");
    setPassword("");
    setPhoneNo("");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Register
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Register to your account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: 300,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{ color: "#003580", fontSize: 16, fontWeight: "bold" }}
            >
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your Email..."
              placeholderTextColor="black"
              autoCapitalize="none"
              style={{ marginTop: 10 }}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: 300,
              borderRadius: 10,
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{ color: "#003580", fontSize: 16, fontWeight: "bold" }}
            >
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="enter your Password..."
              placeholderTextColor="black"
              style={{ marginTop: 10 }}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: 300,
              borderRadius: 10,
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{ color: "#003580", fontSize: 16, fontWeight: "bold" }}
            >
              Phone Number
            </Text>

            <TextInput
              value={phoneNo}
              onChangeText={(text) => setPhoneNo(text)}
              placeholder="enter your Phone Number..."
              placeholderTextColor="black"
              autoCapitalize="none"
              style={{ marginTop: 10 }}
            />
          </View>
        </View>

        <Pressable
          onPress={register}
          style={{
            width: 200,
            backgroundColor: "#003580",
            paddingVertical: 12,
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15, marginLeft: "auto", marginRight: "auto" }}
        >
          <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
            Already have an account? Login now!
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
