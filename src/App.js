import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { applyMiddleware } from 'redux';
import { Button } from './components/common';
import RouterComponent from './RouterComponent';

// issue with 2.x
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {loggedIn: false};
  }

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

    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({ loggedIn: true});
      } else{
        this.setState({ loggedIn: false});
      }
    });

  }

  renderContent(){
    // if(this.state.loggedIn){
    //   return(
    //     <Button>
    //       Log out
    //     </Button>
    //   );
    // }

    return <RouterComponent />;
  }


  render(){
    // Gotchas:
    // - store must now be static
    // - Don't use Header from common
    return(
        <Provider store={store}>
          <RouterComponent />
        </Provider>
    );

  }
}
