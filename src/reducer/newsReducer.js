const defaultNewsReducer = {
  favoriteNews: [],
  newsList: [],
};

export function newsReducer(state = defaultNewsReducer, action) {
  return {
    ...state,
  };
}
