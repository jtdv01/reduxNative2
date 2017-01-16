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
export const loginUser = ({ email,password }) =>{
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword()
      .then(user => {
        loginUserSucess(dispatch, user);
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
          loginUserSucess(dispatch, user);
        })
      })
  };
}

const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
};
