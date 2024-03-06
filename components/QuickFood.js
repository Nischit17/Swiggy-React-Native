import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import quickfood from "../data/quickfood";

const QuickFood = () => {
  const data = quickfood;

  return (
    <View>
      <Text style={{ padding: 20, fontWeight: "bold", fontSize: 20 }}>
        Get It Quickly
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <Pressable style={{ margin: 10, paddingLeft: 12 }} key={item.id}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 14, fontWeight: "500" }}>
              {item.name}
            </Text>
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
          </Pressable>
        ))}
      </ScrollView>
      <Text
        style={{
          padding: 20,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Restaurants
      </Text>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
