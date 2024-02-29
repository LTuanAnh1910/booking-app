import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomScreen = () => {
  const route = useRoute();
  console.log("rooms", route.params);

  const [selected, setSelected] = useState([]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available rooms",
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
  console.log(selected);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, padding: 10, backgroundColor: "white" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007fff", fontSize: 17, fontWeight: "500" }}
              >
                {item.name}
              </Text>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="#007fff"
              />
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>Pay at property</Text>
            <Text style={{ color: "green", fontSize: 15, marginTop: 3 }}>
              Free cancllation Availble
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                ${route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}>${route.params.newPrice}</Text>
            </View>
            <Amenities />

            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318ce7",
                  backgroundColor: "#f0f8ff",
                  borderWidth: 2,
                  borderRadius: 6,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#007fff",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  SELECT
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007fff",
                  borderWidth: 2,
                  borderRadius: 6,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#007fff",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              name: route.params.name,
              rating: route.params.rating,
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              adults: route.params.adults,
              children: route.params.children,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            backgroundColor: "#007fff",
            padding: 8,
            marginBottom: 30,
            borderRadius: 6,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              paddingVertical: 5,
            }}
          >
            Resever
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomScreen;
