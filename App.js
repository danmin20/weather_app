import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
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
    locate: null
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
            temp={Math.round(temperature - 273.15)}
            max_temp={Math.round(max_temperature - 273.15)}
            min_temp={Math.round(min_temperature - 273.15)}
            locate={location}
          />
        ) : (
          <LinearGradient colors={["#304352", "black"]} style={styles.loading}>
            <View>
              <Text style={styles.loadingText}>
                Getting the lovely weather ...
              </Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          </LinearGradient>
        )}
      </View>
    );
  }
  _getWeather = (lat, lon) => {
    const API_KEY = Key();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
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
        });
      });
  };
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
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingBottom: 50
  },
  loadingText: {
    color: "white",
    fontSize: 20,
  }
});
