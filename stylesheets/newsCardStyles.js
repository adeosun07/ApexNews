import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 15,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },
  source: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#00BFFF",
    marginBottom: 5,
  },
  date: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#ccc",
    marginBottom: 10,
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#fff",
  },
});

export default styles;
