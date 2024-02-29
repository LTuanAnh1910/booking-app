import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Flights
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",

          gap: 5,
        }}
      >
        <Ionicons name="ios-car-sport-outline" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Car Rental
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",

          gap: 5,
        }}
      >
        <FontAwesome name="taxi" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
