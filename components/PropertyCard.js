import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  adults,
  property,
  availbleRooms,
  selectedDates,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("PropertyInfo", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            adults: adults,
            availbleRooms: property.rooms,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{ flexDirection: "row", backgroundColor: "white", margin: 15 }}
      >
        <View>
          <Image
            source={{ uri: property.image }}
            style={{ height: height / 4, width: width - 280, marginTop: 12 }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <Ionicons name="heart-outline" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <Ionicons name="star" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6cb4ee",
                paddingVertical: 3,
                borderRadius: 4,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 night and {adults} adults
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              ${property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18 }}>${property.newPrice * adults}</Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel room: 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#608268",
              paddingVertical: 3,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
              marginTop: 2,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
