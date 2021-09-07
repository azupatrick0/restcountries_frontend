import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fetchAllCountries from 'reducers/fetchAllCountries';
import spin from 'reducers/spin';

const rootReducer = combineReducers({
  countries: fetchAllCountries,
  spin: spin,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;