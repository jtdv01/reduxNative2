import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component{
  render(){
    return(
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
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
