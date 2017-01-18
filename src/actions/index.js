export const EMAIL_CHANGED = "email_changed";
export const emailChanged = (text) => {
  return{
      type: EMAIL_CHANGED,
      payload: text
  };
}
export const PASSWORD_CHANGED = "password_changed";
export const passwordChanged = (text) => {
  return{
      type: PASSWORD_CHANGED,
      payload: text
  };
}

// Async action creator with Redux Thunk
// **************************************
import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const loginUser = ({ email,password }) =>{
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSucess(dispatch, user);
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(user => {
            loginUserSucess(dispatch, user)
          .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
          });
        })
      });
  };
}
const loginUserFail = (dispatch) => {
  console.log("Dispatching login user fail");
  dispatch({
    type: LOGIN_USER_FAIL
  });
}

import { Actions } from 'react-native-router-flux';
const loginUserSucess = (dispatch, user) => {
  console.log("Dispatching login user sucess");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.employeeList();
};
