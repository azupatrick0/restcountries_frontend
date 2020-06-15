/* eslint-disable array-callback-return */
import axios from 'axios';
import { ACTIONS } from './actionTypes';

const fetchAllCountries = () => async (dispatch: any) => {
  try {
    await dispatch({
      type: ACTIONS.LOADING
    });

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/all`);
    if (response) {
      let returnedCountries: any[] = [];

      response.data.map((country: { name: string; flag: string; region: string; }) => {
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
      payload: `An error occurred while fetching all countries, please reload ${error}`
    });
  }
};

export default fetchAllCountries;
