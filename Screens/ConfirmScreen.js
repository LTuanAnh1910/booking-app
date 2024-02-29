import { View, Text, Pressable } from "react-native";
import React, { useId, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const ConfirmScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirm Information",
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
  const dispatch = useDispatch();
  const uid = auth.currentUser.uid;
  const confirmBooking = async () => {
    dispatch(savedPlaces(route.params));

    await setDoc(
      doc(db, "users", `${uid}`),
      {
        bookingDetails: { ...route.params },
      },
      {
        merge: true,
      }
    );
    navigation.replace("Main");
  };
  return (
    <View>
      <Pressable style={{ backgroundColor: "white", margin: 10 }}>
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
              {route.params.startDate}
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
              {route.params.endDate}
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

        <Pressable
          onPress={confirmBooking}
          style={{
            backgroundColor: "#003580",
            padding: 5,
            width: 120,
            marginHorizontal: 12,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Book Now
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmScreen;
