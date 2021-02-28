export const initialFetch = payload => ({
  type: 'INITIAL_FETCH',
  data: payload,
});

export const incrementalFetch = payload => ({
  type: 'INCREMENTAL_FETCH',
  data: payload,
});
