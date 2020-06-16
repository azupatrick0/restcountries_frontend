import { ACTIONS } from '../actions/actionTypes';

const initialState = {
	spin: {},
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

		case ACTIONS.GET_SPIN: {
			return {
        ...state,
        spin: action.payload,
      }
		}
		
		case ACTIONS.GET_SPIN_ERROR: {
			return {
        ...state,
        error: action.payload,
      }
		}
		
		default:
			return state;
	}
};
