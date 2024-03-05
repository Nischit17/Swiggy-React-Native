import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://carousels-ads.swiggy.com/images/slider/1.jpg",
    "https://carousels-ads.swiggy.com/images/slider/2.jpg",
    "https://carousels-ads.swiggy.com/images/slider/3.jpg",
    "https://carousels-ads.swiggy.com/images/slider/4.jpg",
    "https://carousels-ads.swiggy.com/images/slider/5.jpg",
    "https://carousels-ads.swiggy.com/images/slider/6.jpg",
    "https://carousels-ads.swiggy.com/images/slider/7.jpg",
    "https://carousels-ads.swiggy.com/images/02%2001.png",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 10,
          width: "94%",
        }}
        autoPlay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
