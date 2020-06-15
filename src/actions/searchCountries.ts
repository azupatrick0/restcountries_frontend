/* eslint-disable array-callback-return */
import axios from 'axios';
import { ACTIONS } from './actionTypes';

const searchCountries = (searchValue: any) => async (dispatch: any) => {
  try {
    await dispatch({
      type: ACTIONS.LOADING
    });

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countries/search?query=${searchValue}`);
    if (response) {
      let returnedCountries: any[] = [];

      response.data.data.countries.map((country: { name: string; flag: string; region: string; }) => {
        returnedCountries = [...returnedCountries, {
          name: country.name,
          flag: country.flag,
          region: country.region
        }];
      });

      await dispatch({
        type: ACTIONS.STOP_LOADING
      });

      return dispatch({
        type: ACTIONS.GET_ALL_COUNTRIES,
        payload: returnedCountries,
      });
    }
  } catch (error) {
    await dispatch({
      type: ACTIONS.STOP_LOADING
    });

    return dispatch({
      type: ACTIONS.GET_ALL_COUNTRIES_ERROR,
      payload: 'An error occurred while fetching searched countries, please reload'
    });
  }
};

export default searchCountries;
