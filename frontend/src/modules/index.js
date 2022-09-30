import  { combineReducers } from 'redux';

const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  if (action.type === 'auth/AUTH_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action)
}

export default appReducer;