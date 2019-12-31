import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather.js';

const API_KEY = "a6c871ae56ea287c295f7692a1679dee";

export default class App extends Component {
  state ={
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
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
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {isLoaded ? (
          <Weather weatherName="Haze" temp={Math.round(temperature -273.15)}/>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>
              Getting the lovely weather ...
            </Text>
            { error ? <Text style={styles.errorText}>{error}</Text> : null }
          </View>
        )}
      </View>
    );
  }
  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FFD689",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingBottom: 25
  },
  loadingText: {
    color: "white",
    fontSize: 35,
  }
});
