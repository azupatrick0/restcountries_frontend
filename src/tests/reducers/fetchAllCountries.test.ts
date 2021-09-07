import fetchAllCountries from 'reducers/fetchAllCountries';

it('should returns error when an error occurs', () => {
  const initialState = {
    allCountries: [],
    loading: false,
    error: ''
  };

  const state = fetchAllCountries(initialState, {
    type: 'GET_ALL_COUNTRIES_ERROR',
    payload: 'An error occurred while fetching all countries, please reload'
  });

  expect(state).toEqual({
    ...initialState,
    error: 'An error occurred while fetching all countries, please reload'
  });
});

it('should returns all countries', () => {
  const initialState = {
    allCountries: [],
    loading: false,
    error: ''
  };

  const state = fetchAllCountries(initialState, {
    type: 'GET_ALL_COUNTRIES',
    payload: [{
      name: "Malta",
      flag: "https://restcountries.eu/data/mlt.svg",
      region: "Europe"
    }]
  });

  expect(state).toEqual({
    ...initialState,
    allCountries: [{
      name: "Malta",
      flag: "https://restcountries.eu/data/mlt.svg",
      region: "Europe"
    }]
  });
});

it('should returns loading true while wating for async event to complete', () => {
  const initialState = {
    allCountries: [],
    loading: false,
    error: ''
  };

  const state = fetchAllCountries(initialState, {
    type: 'LOADING',
    payload: []
  });

  expect(state).toEqual({
    ...initialState,
    loading: true,
  });
});

it('should returns loading false while async event have completed', () => {
  const initialState = {
    allCountries: [],
    loading: true,
    error: ''
  };

  const state = fetchAllCountries(initialState, {
    type: 'STOP_LOADING',
    payload: []
  });

  expect(state).toEqual({
    ...initialState,
    loading: false,
  });
});

it('should return initial state on undefined action', () => {
  const state = fetchAllCountries(undefined, { type: '', payload: [] });

  expect(state).toEqual({
    allCountries: [],
    loading: false,
    error: ''
  });
});
