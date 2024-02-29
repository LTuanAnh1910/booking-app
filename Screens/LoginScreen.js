import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // console.log(userCredentials.user.stsTokenManager.accessToken);

  // AsyncStorage.setItem(
  //   "tokenUser",
  //   userCredentials.user.stsTokenManager.accessToken
  // );

  // useEffect(() => {
  //   const getMyObject = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem("tokenUser");
  //       console.log(jsonValue);
  //       if (jsonValue) {
  //         navigation.replace("Main");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMyObject();
  // }, [token]);

  useEffect(() => {
    try {
      const unsubcribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate("Main");
        }
      });

      return unsubcribe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log("userCredentials", userCredentials);
        const user = userCredentials.user;
        console.log(user);
        navigation.replace("Main");
      }
    );
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
            Log In
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign in to your account
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
              autoCapitalize="none"
              style={{ marginTop: 10 }}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable
          onPress={login}
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
            LOGIN
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15, marginLeft: "auto", marginRight: "auto" }}
        >
          <Text style={{ color: "gray", fontSize: 15, fontWeight: "500" }}>
            Don't have account? Sign Up{" "}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
