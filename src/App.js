import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";
import Weather from "./components/Weather";
import Key from "./key/API_KEY";
import Loading from "./components/Loading";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    max_temperature: null,
    min_temperature: null,
    name: null,
    locate: null,
    refreshing: false,
  };

  preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Entypo.font,
        ...MaterialCommunityIcons.font,
      });
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.preLoad();
    navigator.geolocation.getCurrentPosition((position) => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }),
      (error) => {
        this.setState({ errer: error });
      };
  }

  render() {
    const {
      isLoaded,
      error,
      temperature,
      max_temperature,
      min_temperature,
      name,
      location,
      refreshing,
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {isLoaded ? (
          <Weather
            weatherName={name}
            temp={temperature}
            max_temp={max_temperature}
            min_temp={min_temperature}
            locate={location}
            onRefresh={this._handleRefresh}
            refreshing={refreshing}
          />
        ) : (
          <Loading error={error} />
        )}
      </View>
    );
  }

  _getWeather = (lat, lon) => {
    const API_KEY = Key();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          max_temperature: json.main.temp_max,
          min_temperature: json.main.temp_min,
          name: json.weather[0].main,
          location: json.name,
          isLoaded: true,
          refreshing: false,
        });
      });
  };
  _handleRefresh = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }),
      this.setState({
        refreshing: true,
      });
  };
}
