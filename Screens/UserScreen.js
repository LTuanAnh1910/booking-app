import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const UserScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert("Invalide Details", "Please enter all the fields ", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (firstName && lastName && email && phoneNo) {
      navigation.navigate("Confirm", {
        name: route.params.name,
        rating: route.params.rating,
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        adults: route.params.adults,
        children: route.params.children,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>First name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{
              padding: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="enter your Firstname..."
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{
              padding: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="enter your Lastname..."
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              padding: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="enter your Email..."
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>PhoneNo</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            style={{
              padding: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="enter your Phone number..."
          />
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              ${route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 18 }}>
              ${route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You Saved {route.params.oldPrice - route.params.newPrice}${" "}
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{
            backgroundColor: "#007fff",
            padding: 10,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;
