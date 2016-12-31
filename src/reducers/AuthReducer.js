const INITIAL_STATE = { email: '', password: '' };
import { EMAIL_CHANGED } from '../actions/index';
export default (state= INITIAL_STATE,action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log("Reducer auth email");
      return { ...state, email: action.payload};
    default:
      return state;
  }
}
