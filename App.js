import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Weather from './Weather.js';
import Key from './key/API_KEY';

export default class App extends Component {
  state ={
    isLoaded: false,
    error: null,
    temperature: null,
    max_temperature: null,
    min_temperature: null,
    name: null,
    locate: null,
    refreshing: false
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
       this._getWeather(position.coords.latitude, position.coords.longitude);
      }
    ),
    error => {
      this.setState({errer: error})
    }
  }
  render() {
    const {
      isLoaded,
      error,
      temperature,
      max_temperature,
      min_temperature,
      name,
      location
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isLoaded ? (
          <Weather
            weatherName={name}
            temp={temperature}
            max_temp={max_temperature}
            min_temp={min_temperature}
            locate={location}
            onRefresh={this._handleRefresh}
          />
        ) : (
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
                <MaterialCommunityIcons
                  color="white"
                  size={50}
                  name="weather-hail"
                />
                <MaterialCommunityIcons
                  color="white"
                  size={50}
                  name="weather-partlycloudy"
                />
                <MaterialCommunityIcons
                  color="white"
                  size={50}
                  name="weather-fog"
                />
              </View>
              <Text style={styles.loadingText}>..Loading..</Text>
            </View>
            <Text style={styles.loadingText}></Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </LinearGradient>
        )}
      </View>
    );
  }
  _getWeather = (lat, lon) => {
    const API_KEY = Key();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          max_temperature: json.main.temp_max,
          min_temperature: json.main.temp_min,
          name: json.weather[0].main,
          location: json.name,
          isLoaded: true,
          refreshing: false
        });
      });
  };
  _handleRefresh = () => {
    this.setState({
      refreshing: true,
    }, this._getWeather);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    justifyContent: "center"
  },
  loadingText: {
    color: "white",
    fontSize: 17,
    alignSelf: 'center',
    paddingTop: 15
  },
  icons: {
    flexDirection: 'row'
  },
  symbol: {
    alignSelf: 'center'
  }
});
