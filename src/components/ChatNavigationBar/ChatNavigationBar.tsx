import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ChatNavigationBar = (props) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        width,
        backgroundColor: "#3872E9",
        alignItems: "center",
        marginTop: insets.top,
        padding: 10,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#fff"
          style={{ marginRight: 15 }}
        />
      </Pressable>
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

      <Text
        style={{ flex: 1, fontWeight: "bold", color: "white", marginLeft: 10 }}
      >
        Elon Musk
      </Text>
      <FontAwesome
        name="video-camera"
        size={24}
        color="white"
        style={{ marginRight: 10 }}
      />
      <Feather name="edit-2" size={24} color="black" />
    </View>
  );
};

export default ChatNavigationBar;
