import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import searchCountries from 'actions/searchCountries';
import { ACTIONS } from 'actions/actionTypes';
import mockAxios from '__mocks__/axios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('searchCountries actions', () => {
  it('creates GET_ALL_COUNTRIES when fetching countries is complete', () => {

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        data: {
          countries: [{
            name: 'Malta',
            flag: 'https://restcountries.eu/data/mlt.svg',
            region: 'Europe'
          }]
        }
      }
    }));

    const expectedActions = [
      { type: ACTIONS.LOADING },
      { type: ACTIONS.STOP_LOADING },
      { 
        type: ACTIONS.GET_ALL_COUNTRIES,
        payload: [{
          name: 'Malta',
          flag: 'https://restcountries.eu/data/mlt.svg',
          region: 'Europe'
        }]
      }
    ]

    const store:any = mockStore();

    return store.dispatch(searchCountries('Malta')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
})