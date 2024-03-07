import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

// Icons
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  const route = useRoute();
  const navigation = useNavigation();

  const [menu, setMenu] = useState([]);

  const fetchMenu = () => {
    setMenu(route.params.menu);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "#eeb741",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="search1" size={22} color="black" />
              <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 7 }}>
                Search
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: 210,
              marginHorizontal: 20,
              marginVertical: 5,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  style={{ marginHorizontal: 7 }}
                  name="sharealt"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={22} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {route.params.time} mins
              </Text>
            </View>

            <Text style={{ marginTop: 8, color: "gray", fontSize: 15 }}>
              {route.params.cuisines}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>Outlet</Text>
              <Text
                style={{ marginLeft: 25, fontSize: 15, fontWeight: "bold" }}
              >
                {route.params.adress}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>22 mins</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
              >
                Home
              </Text>
            </View>

            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.6,
                height: 1,
                marginTop: 12,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Ionicons name="bicycle-sharp" size={24} color="orange" />
              <Text style={{ marginLeft: 7, color: "gray", fontSize: 15 }}>
                0-8 Kms
              </Text>
              <Text style={{ marginLeft: 130, color: "gray", fontSize: 15 }}>
                FREE DELIVERY
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: 500,
            marginTop: 10,
          }}
        >
          MENU
        </Text>

        <Text
          style={{
            borderColor: "gray",
            borderWidth: 0.6,
            height: 1,
            marginTop: 12,
          }}
        />

        {route.params.menu.map((item) => (
          <FoodItem item={item} key={item.id} />
        ))}
      </ScrollView>

      <Pressable
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          backgroundColor: "black",
          marginLeft: "auto",
          position: "absolute",
          bottom: 35,
          right: 25,
          alignContent: "center",
        }}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text style={{ textAlign: "center", color: "white", fontWeight: 500 }}>
          MENU
        </Text>
      </Pressable>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#00A877",
            width: "90%",
            padding: 13,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
            position: "absolute",
            borderRadius: 10,
            left: 20,
            bottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                {cart.length} items | {total}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginTop: 3,
                  color: "white",
                }}
              >
                FREE DELIVERY 🥳!
              </Text>
            </View>

            <Pressable
              onPress={() =>
                navigation.navigate("Cart", {
                  name: route.params.name,
                })
              }
            >
              <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                View Cart
              </Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
