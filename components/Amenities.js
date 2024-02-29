import { View, Text } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "room service",
    },
    {
      id: "2",
      name: "free wifi",
    },
    {
      id: "3",
      name: "Family rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "swimming pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness center",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>
        Most Papular Facilities
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {services.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#007fff",
              margin: 10,
              paddingHorizontal: 11,
              paddingVertical: 4,
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;
