import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import spin from 'actions/spin';
import { ACTIONS } from 'actions/actionTypes';
import mockAxios from '__mocks__/axios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('spin actions', () => {
  it('creates GET_SPIN when spinning is complete', () => {

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        data: {
          result: ['apple', 'lemon', 'lemon'],
          won: 0
        }
      }
    }));

    const expectedActions = [
      { type: ACTIONS.LOADING },
      { type: ACTIONS.STOP_LOADING },
      { 
        type: ACTIONS.GET_SPIN,
        payload: {
          result: ['apple', 'lemon', 'lemon'],
          won: 0
        }
      }
    ]

    const store:any = mockStore();

    return store.dispatch(spin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_SPIN_ERROR when spinning errors', () => {

    mockAxios.get.mockImplementationOnce(() => Promise.reject({}));

    const expectedActions = [
      { type: ACTIONS.LOADING },
      { type: ACTIONS.STOP_LOADING },
      { 
        type: ACTIONS.GET_SPIN_ERROR,
        payload: 'An error occurred while spinning, please reload'
      }
    ]

    const store:any = mockStore();

    return store.dispatch(spin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})