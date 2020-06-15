import { ACTIONS } from '../actions/actionTypes';

const initialState = {
	allCountries: [],
	loading: false,
	error: ''
};

export default (state = initialState, action: { type: string; payload: any; }) => {
	
	switch (action.type) {
    case ACTIONS.LOADING: {
			return {
        ...state,
        loading: true,
      }
    }

    case ACTIONS.STOP_LOADING: {
			return {
        ...state,
        loading: false,
      }
    }

		case ACTIONS.GET_ALL_COUNTRIES: {
			return {
        ...state,
        allCountries: action.payload,
      }
		}
		
		case ACTIONS.GET_ALL_COUNTRIES_ERROR: {
			return {
        ...state,
        error: action.payload,
      }
		}
		
		default:
			return state;
	}
};
