import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const insets = useSafeAreaInsets();

  const sendMessage = () => {
    setMessage("");
  };

  const onPlusClicked = () => {
    console.log("artıya basıldı");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      style={[styles.container, { marginBottom: insets.bottom }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={120}
    >
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={24} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Signal message..."
          value={message}
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color="grey" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="grey"
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={18} color="#fff" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3872E9",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
