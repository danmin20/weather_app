import React from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { weatherCases } from "../../weatherCases";
import { styles } from "./styles";

function Weather({
  weatherName,
  temp,
  max_temp,
  min_temp,
  locate,
  onRefresh,
  refreshing,
}) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.upper}>
          <View style={styles.location}>
            <Entypo color="white" size={25} name="location-pin" />
            <Text style={styles.location}>{locate}</Text>
          </View>
          <MaterialCommunityIcons
            color="white"
            size={130}
            name={weatherCases[weatherName].icon}
          />
          <Text style={styles.temp}>{temp}°C</Text>
          <View style={styles.minmax}>
            <Text style={styles.temps}>MIN {min_temp}°C</Text>
            <Text style={styles.temps}>MAX {max_temp}°C </Text>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.weather}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.kor}>: {weatherCases[weatherName].kor}</Text>
          </View>
          <Text style={styles.subtitle}>
            {weatherCases[weatherName].subtitle}
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  min_temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
  locate: PropTypes.string.isRequired,
};

export default Weather;
