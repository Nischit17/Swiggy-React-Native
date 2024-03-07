import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels";
import restaurants from "../data/restaurants";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MenuItem from "../components/MenuItem";
import MenuItem1 from "../components/MenuItem1";

const HomeScreen = () => {
  const data = hotels;

  const data1 = restaurants;

  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{ fontSize: 14 }}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#f0b639" />
      </View>

      {/* Image Slider Component */}
      <Carousel />

      {/* Food Item Types */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

      {/* Filter Buttons */}
      {/* <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text style={{ paddingRight: 2 }}>Sort By</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text>Fast Delivery</Text>
        </Pressable>
      </View> */}

      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
