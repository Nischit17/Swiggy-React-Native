import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

// Icons
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <ScrollView style={{ marginTop: 50 }}>
      {total > 0 ? (
        <>
          <View
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <Text style={{ fontSize: 17, fontWeight: 600, marginLeft: 3 }}>
              {route.params.name}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Ordering for someone else ?
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#FF4500" }}>
              ADD DETAILS
            </Text>
          </View>

          <View
            style={{
              marginTop: 16,
              marginHorizontal: 10,
              backgroundColor: "white",
              borderRadius: 12,
              padding: 14,
            }}
          >
            {cart.map((item) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
                key={item.id}
              >
                <Text style={{ width: 100, fontSize: 14, fontWeight: "600" }}>
                  {item.name}
                </Text>

                <Pressable
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: "center",
                    borderColor: "#BEBEBE",
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 19,
                        color: "green",
                        paddingHorizontal: 8,
                        fontWeight: "600",
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>

                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  ₹ {item.price * item.quantity}
                </Text>
              </View>
            ))}
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: 600 }}>
            Your Cart Is EMPTY 🥲
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
