import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
class LoginForm extends Component{
  onEmailChange(text){
    // console.log("email changed");
    this.props.emailChanged(text);
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
        >
        </Input>
      </CardSection>

      <CardSection>
        <Button> Login </Button>
      </CardSection>

    </Card>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    email: state.auth.email
  };
}
import { emailChanged } from '../actions';
export default connect(mapStateToProps,{ emailChanged })(LoginForm);
