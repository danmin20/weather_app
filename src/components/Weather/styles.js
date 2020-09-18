import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
  },
  upper: {
    height: height / 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 45,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10,
  },
  minmax: {
    marginTop: 10,
    width: 100,
  },
  temps: {
    fontSize: 15,
    color: "white",
  },
  location: {
    fontSize: 20,
    color: "white",
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "baseline",
  },
  weather: {
    flexDirection: "row",
  },
  lower: {
    marginTop: 90,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  title: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: "white",
    paddingBottom: 10,
  },
  kor: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginLeft: 10,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
});
