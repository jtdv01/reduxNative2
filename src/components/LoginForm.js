import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class LoginForm extends Component{
  onEmailChange(text){
    // console.log("email changed");
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    // PASSING IN from a this.onButtonPress.bind(this) but the parameters ARE PROPS
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  render(){
    return(
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        >
        </Input>
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        >
        </Input>

      <View>
      <Text>
        {this.props.error}
      </Text>
      </View>
      </CardSection>


      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
      </CardSection>

    </Card>
    );
  }
}

// State / reducers--------------------------
const mapStateToProps =(state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}
// Actions --------------------------
import { emailChanged, passwordChanged, loginUser } from '../actions';
export default
  connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser
})(LoginForm);
