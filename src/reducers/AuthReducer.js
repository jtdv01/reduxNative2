const INITIAL_STATE = { email: '', password: '', error: '' };
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../actions/index';
export default (state= INITIAL_STATE,action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log("Reducer auth email");
      return { ...state, email: action.payload};
    case PASSWORD_CHANGED:
      console.log("Reducer auth password");
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      console.log("Reducer login user sucess!");
      return {...state, user: action.payload, error: ''};
    case LOGIN_USER_FAIL:
      console.log("Reducer login user FAIL!");
      return {...state, error: 'Authentication failed', password: ''};
    default:
      return state;
  }
}
