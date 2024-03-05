import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuItem = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <Pressable style={{ flexDirection: "row", paddingLeft: 12 }}>
        <View style={{ position: "relative" }}>
          <ImageBackground
            imageStyle={{ borderRadius: 8 }}
            style={{ aspectRatio: 4 / 5, height: 150 }}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={{ position: "absolute", right: 10, top: 10 }}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          {/* Name Of The Restaurant */}
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>

          {/* Rating & Time */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <MaterialIcons name="stars" size={22} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.time} mins
            </Text>
          </View>

          {/* Address */}
          <Text style={{ fontSize: 15, color: "gray", marginTop: 6 }}>
            {item.adress}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#090979",
                width: 22,
                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} For Two
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 8, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
