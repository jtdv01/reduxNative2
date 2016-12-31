const INITIAL_STATE = { email: '', password: '' };
import { EMAIL_CHANGED, PASSWORD_CHANGED} from '../actions/index';
export default (state= INITIAL_STATE,action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log("Reducer auth email");
      return { ...state, email: action.payload};
    case PASSWORD_CHANGED:
      console.log("Reducer auth password");
      return {...state, password: action.payload};
    default:
      return state;
  }
}
