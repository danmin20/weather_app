import React from "react";
import { View, LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export default (error) => {
  return (
    <LinearGradient colors={["#FAEB98", "#FA9D98"]} style={styles.loading}>
      <View style={styles.symbol}>
        <View style={styles.icons}>
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-pouring"
          />
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-sunny"
          />
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-lightning"
          />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-cloudy"
          />
          <Entypo color="#E67049" size={50} name="location-pin" />
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-snowy"
          />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons color="white" size={50} name="weather-hail" />
          <MaterialCommunityIcons
            color="white"
            size={50}
            name="weather-partlycloudy"
          />
          <MaterialCommunityIcons color="white" size={50} name="weather-fog" />
        </View>
        <Text style={styles.loadingText}>..Loading..</Text>
      </View>
      <Text style={styles.loadingText}></Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </LinearGradient>
  );
};
