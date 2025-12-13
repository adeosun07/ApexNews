import React, { useEffect, useRef } from "react";
import { View, Animated, Image } from "react-native";

export default function Loading() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const beat = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );
    beat.start();
    return () => beat.stop();
  }, [scale]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Animated.Image
        source={require("../assets/apexnews.png")}
        style={{
          width: 100,
          height: 100,
          transform: [{ scale }],
        }}
        resizeMode="contain"
      />
    </View>
  );
}
