import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const NavigationBar = (props) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        alignItems: "center",
        marginTop: insets.top,
        padding: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
          }}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
          }}
        />
      </View>
      <Text style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
        Signal
      </Text>
      <View style={{ flexDirection: "row-reverse", flex: 1 }}>
        <Feather name="edit-2" size={24} color="black" />
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
    </View>
  );
};

export default NavigationBar;
