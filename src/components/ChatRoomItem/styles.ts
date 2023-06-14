import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    color: "grey",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  badgeContainer: {
    backgroundColor: "#3872E9",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    borderWidth: 1,
    borderColor: "white",
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
