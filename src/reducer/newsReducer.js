import { GET_NEWS_LIST_FAILURE, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS } from "../action/news";

const defaultNewsReducer = {
  favoriteNews: [],
  newsList: [],
  loading: false,
};

export function newsReducer(state = defaultNewsReducer, action) {
  switch (action.type) {
    case GET_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.result.items,
      };

    case GET_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
  }
  return {
    ...state,
  };
}
