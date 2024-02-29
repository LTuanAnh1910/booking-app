import { View, Text, Pressable } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);

  const coordinates = [];
  const detail = route.params.searchResults.map((item) =>
    item.properties.map((prop) => {
      coordinates.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        bottom: 190,
        left: 190,
        right: 190,
      },
    });
  });

  console.log(
    route.params.searchResults.map((item) =>
      item.properties.map((item) => item.latitude)
    )
  );

  return (
    <View>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      >
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              key={property.id}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;
