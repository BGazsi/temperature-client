const initialState = {
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        data: action.data,
        error: action.error || null,
      };
    case 'INCREMENTAL_FETCH':
      return {
        ...state,
        data: [action.data].concat(state.data),
      };
    default:
      return state;
  }
};
