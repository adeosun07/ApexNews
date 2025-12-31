import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#000",
  },
  appName: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#00BFFF",
  },
  categoryScroll: {
    maxHeight: 70,
    backgroundColor: "#000",
  },
  categoryContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 8,
  },
  categoryButton: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333",
    minHeight: 36,
    justifyContent: "center",
  },
  categoryButtonActive: {
    backgroundColor: "#00BFFF",
    borderColor: "#00BFFF",
  },
  categoryText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#fff",
  },
  categoryTextActive: {
    color: "#000",
    fontFamily: "Poppins-Bold",
  },
  searchButton: {
    backgroundColor: "#00BFFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  newsList: {
    paddingBottom: 20,
  },
  seeMoreButton: {
    backgroundColor: "#00BFFF",
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  seeMoreText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 20,
    fontFamily: "Poppins-Regular",
  },
});

export default styles;
