import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface DataModel {
  id: string;
  users: User[];
  lastMessage: Message;
  newMessages?: number;
}

interface User {
  id: string;
  name: string;
  imageUri: string;
}

interface Message {
  id: string;
  content: string;
  createdAt: string;
}

interface ChatRoomItemProps {
  chatRoom: DataModel;
}

export default function ChatRoomItem({ chatRoom }: ChatRoomItemProps) {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChatRoomScreen");
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri,
        }}
      />
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
