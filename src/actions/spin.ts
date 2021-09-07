/* eslint-disable array-callback-return */
import axios from 'axios';
import { ACTIONS } from './actionTypes';

const spin = () => async (dispatch: any) => {
  try {
    await dispatch({
      type: ACTIONS.LOADING
    });

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/slot/spin`);
    if (response) {
      const returnedSpin = {
        result: response.data.data.result,
        won: response.data.data.won
      }

      await dispatch({
        type: ACTIONS.STOP_LOADING
      });

      return dispatch({
        type: ACTIONS.GET_SPIN,
        payload: returnedSpin,
      });
    }
  } catch (error) {
    await dispatch({
      type: ACTIONS.STOP_LOADING
    });

    return dispatch({
      type: ACTIONS.GET_SPIN_ERROR,
      payload: 'An error occurred while spinning, please reload'
    });
  }
};

export default spin;
