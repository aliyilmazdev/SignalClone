import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Message from "../components/Message";
import chatRoomData from "../../assets/dummy-data/Chats";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageInput from "../components/MessageInput";
import ChatNavigationBar from "../components/ChatNavigationBar";

const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      <ChatNavigationBar />
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <FlatList
          inverted
          data={chatRoomData.messages}
          renderItem={({ item }) => <Message message={item} />}
        />
        <MessageInput />
      </View>
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3872E9",
    flex: 1,
  },
});
