import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { pixelNormalise } from "../components/Normalise";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
      headerRight: () => (
        <Ionicons
          style={{ marginRight: 12 }}
          name="notifications-outline"
          size={24}
          color="white"
        />
      ),
    });
  }, []);

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = Math.abs(difference / route.params.oldPrice) * 100;

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 10 }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginVertical: 10,
            }}
          >
            {route.params.photos.slice(0, 5).map((photo, index) => (
              <View key={index} style={{ margin: 5, marginTop: 15 }}>
                <Image
                  style={{
                    width: 120,
                    height: pixelNormalise(80),
                    borderRadius: pixelNormalise(4),
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}

            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ textAlign: "center", marginLeft: 20 }}>
                Show more
              </Text>
            </Pressable>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <Ionicons name="star" size={24} color="green" />
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {route.params.rating}
                </Text>
                <View
                  style={{
                    backgroundColor: "#6cb4ee",
                    paddingVertical: 3,
                    borderRadius: 4,
                    width: 100,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#17b619",
                paddingHorizontal: 3,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
                Travel sustainable
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderWidth: 3,
              borderColor: "#e0e0e0",
              height: 1,
              marginTop: 15,
            }}
          />

          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 12,
              }}
            >
              Price for 1 night and {route.params.adults} adults
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginTop: 4,
                marginHorizontal: 12,
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

            <View
              style={{
                marginHorizontal: 12,
                marginTop: 8,
                backgroundColor: "green",
                paddingHorizontal: 4,
                paddingVertical: 5,
                width: 75,
                borderRadius: 6,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {offerPrice.toFixed(0)}% OFF
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderWidth: 3,
              borderColor: "#e0e0e0",
              height: 1,
              marginTop: 15,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              gap: 50,
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 12,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Check In</Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#003580",
                }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Check In</Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#003580",
                }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 12, marginTop: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Rooms and guests
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 16,
                fontWeight: "bold",
                color: "#003580",
              }}
            >{`1 room ${route.params.adults} adults ${route.params.children} children `}</Text>
          </View>

          <Text
            style={{
              borderWidth: 3,
              borderColor: "#e0e0e0",
              height: 1,
              marginTop: 15,
            }}
          />

          <View>
            <Amenities />
          </View>

          <Text
            style={{
              borderWidth: 3,
              borderColor: "#e0e0e0",
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.navigate("Room", {
            name: route.params.name,
            rating: route.params.rating,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            adults: route.params.adults,
            rooms: route.params.availbleRooms,
            children: route.params.children,
            rooms: route.params.availbleRooms,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#7CB9E8",
          paddingVertical: 20,
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availabity
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;
