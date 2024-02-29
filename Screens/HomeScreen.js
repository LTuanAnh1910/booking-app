import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [modalVisibile, setModalVisibile] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert("Invalide Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#ffc72c",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#ffc72c",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor={"black"}
                placeholder={
                  route.params ? route.params.input : "Enter Your Destination"
                }
              />
            </Pressable>

            {/* selectdd Dates */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#ffc72c",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="calendar-outline" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 45,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: { backgroundColor: "#003580" },
                  contentText: {
                    fontSize: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }} // optional
                selectedBgColor="#0047ab"
                allowFontScaling={false}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                placeholder={"Select your dates..."}
                mode={"range"}
              />
            </Pressable>

            {/* Room and guest */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#ffc72c",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="ios-person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor={"red"}
                placeholder={`${rooms} room • ${adults} adults • ${children} children `}
              />
            </Pressable>

            {/* Search button */}
            <Pressable
              onPress={() => searchPlaces(route.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#ffc72c",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>

          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
                You are rate Genius level one in loyalty program
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,

                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
                borderColor: "#e0e0e0",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",

                  marginVertical: 7,
                }}
              >
                15% Discount
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Complete 5 stay to unlock level
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,

                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
                borderColor: "#e0e0e0",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",

                  marginVertical: 7,
                }}
              >
                10% Discount
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Enjoy discount at participating at propertis wordwide
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(2, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 6,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;