import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 17,
    alignSelf: "center",
    paddingTop: 15,
  },
  icons: {
    flexDirection: "row",
  },
  symbol: {
    alignSelf: "center",
  },
});
