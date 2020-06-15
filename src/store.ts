import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fetchAllCountries from 'reducers/fetchAllCountries';

const rootReducer = combineReducers({
  countries: fetchAllCountries,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;