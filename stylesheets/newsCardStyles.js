import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 8,
  },
  contentWithoutImage: {
    position: "relative",
    paddingTop: 15,
    paddingLeft: 15,
  },
  favoriteButtonNoImage: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 8,
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
