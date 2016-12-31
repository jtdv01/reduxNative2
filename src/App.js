import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component{
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAv_0IDA9jEBUY6OwL6y2O7URenjjw0PfM",
      authDomain: "reduxnativelogin.firebaseapp.com",
      databaseURL: "https://reduxnativelogin.firebaseio.com",
      storageBucket: "reduxnativelogin.appspot.com",
      messagingSenderId: "550438439899"
    };
    console.log("Firebase initialising");
    firebase.initializeApp(config);
  }


  render(){
    return(
        <View>
          <LoginForm></LoginForm>
        </View>
    );

  }
}
