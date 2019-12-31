import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types'

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Rainy",
    subtitle: "Please take your umbrella!",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Make sure you put on sunsreen!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Don't cry!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    subtitle: "Don't be depressed!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    subtitle: "Do you wanna build a snowman?",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Just in case, take your umbrella!",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Hazy",
    subtitle: "The view won't be so good..",
    icon: "weather-partlycloudy"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Misty",
    subtitle: "Be careful not to get water in your lungs!",
    icon: "weather-fog"
  }
};

function Weather( { weatherName, temp }) {
    return (
        <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}
      >
        <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={130} name={weatherCases[weatherName].icon}/>
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
      </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 45,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title:{
        fontSize: 35,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})