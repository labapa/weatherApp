import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import Weather from './app/Weather';

const API_KEY = "956705c12a6f78cdb4a9c86f7f46a964"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded : false,
    }
  }
  componentDidMount(){
    this._getWeather()
  }
  
  _getWeather = async() =>{
    const _response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=${API_KEY}&units=metric`)
    const _json = await _response.json()
    this.setState({isLoaded: true, temp: Math.floor(_json.main.temp), title : _json.weather[0].main})
  }
  
  render(){
    return (
      <View style={styles.container}>
        {this.state.isLoaded? <Weather title={this.state.title} temp = {this.state.temp} /> :
        <ActivityIndicator style = {styles.indicator} color='black' size = "large"/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    },
    
});
