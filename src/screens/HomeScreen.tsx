import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomData from "../../assets/dummy-data/ChatRooms";
import { FlashList } from "@shopify/flash-list";

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <FlashList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
