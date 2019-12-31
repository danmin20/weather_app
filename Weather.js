import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import PropTypes from 'prop-types'

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Rainy",
    kor: "비",
    subtitle: "Please take your umbrella!",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    kor: "맑음",
    subtitle: "Make sure you put on sunsreen!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    kor: "뇌우",
    subtitle: "Don't cry!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    kor: "구름",
    subtitle: "Don't be depressed!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    kor: "눈",
    subtitle: "Do you wanna build a snowman?",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    kor: "소나기",
    subtitle: "Just in case, take your umbrella!",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Hazy",
    kor: "흐림",
    subtitle: "The view won't be so good..",
    icon: "weather-partlycloudy"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Misty",
    kor: "안개",
    subtitle: "Be careful not to get water in your lungs!",
    icon: "weather-fog"
  }
};

function Weather( { weatherName, temp, max_temp, min_temp, locate }) {
    return (
      <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}
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
          <Text style={styles.temps}>
            MIN : {min_temp}°C  MAX : {max_temp}°C
          </Text>
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
      </LinearGradient>
    );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  min_temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
  locate: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 45,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    temps: {
        fontSize:15,
        color: "white",
    },
    location: {
        fontSize:20,
        color: "white",
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    weather: {
        flexDirection: 'row',
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 35,
        backgroundColor: "transparent",
        color: "white",
        paddingBottom: 10,
        fontWeight: "300"
    },
    kor: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white",
        marginLeft: 10,
        marginTop: 15,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})