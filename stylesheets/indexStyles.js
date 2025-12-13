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
    backgroundColor: "#000",
  },
  appName: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#00BFFF",
  },
  searchContainer: {
    padding: 20,
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },
  picker: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    marginBottom: 10,
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
