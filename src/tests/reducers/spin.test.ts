import spin from 'reducers/spin';

it('should returns error when an error occurs', () => {
  const initialState = {
    spin: {},
    loading: false,
    error: ''
  };

  const state = spin(initialState, {
    type: 'GET_SPIN_ERROR',
    payload: 'An error occurred while spinning, please reload'
  });

  expect(state).toEqual({
    ...initialState,
    error: 'An error occurred while spinning, please reload'
  });
});

it('should return spin', () => {
  const initialState = {
    spin: {},
    loading: false,
    error: ''
  };

  const state = spin(initialState, {
    type: 'GET_SPIN',
    payload: {
      result: ['apple', 'lemon', 'lemon'],
      won: 0,
    }
  });

  expect(state).toEqual({
    ...initialState,
    spin: {
      result: ['apple', 'lemon', 'lemon'],
      won: 0,
    }
  });
});

it('should returns loading true while wating for async event to complete', () => {
  const initialState = {
    spin: {},
    loading: false,
    error: ''
  };

  const state = spin(initialState, {
    type: 'LOADING',
    payload: {}
  });

  expect(state).toEqual({
    ...initialState,
    loading: true,
  });
});

it('should returns loading false while async event have completed', () => {
  const initialState = {
    spin: {},
    loading: true,
    error: ''
  };

  const state = spin(initialState, {
    type: 'STOP_LOADING',
    payload: {}
  });

  expect(state).toEqual({
    ...initialState,
    loading: false,
  });
});

it('should return initial state on undefined action', () => {
  const state = spin(undefined, { type: '', payload: {} });

  expect(state).toEqual({
    spin: {},
    loading: false,
    error: ''
  });
});
