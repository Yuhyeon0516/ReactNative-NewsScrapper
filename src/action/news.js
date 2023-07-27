export const GET_NEWS_LIST_REQUEST = "GET_NEWS_LIST_REQUEST";
export const GET_NEWS_LIST_SUCCESS = "GET_NEWS_LIST_SUCCESS";
export const GET_NEWS_LIST_FAILURE = "GET_NEWS_LIST_FAILURE";

export const getNewsList = (query) => (dispatch) => {
  dispatch({ type: GET_NEWS_LIST_REQUEST });

  // LsURc_YAAKetDOHTyqVg
  // 9kM0qGd0rM
  // https://openapi.naver.com/v1/search/news.json

  // setTimeout(() => {
  //   dispatch({ type: GET_NEWS_LIST_SUCCESS });
  // }, 2000);

  fetch(`https://openapi.naver.com/v1/search/news.json?query=${query}`, {
    headers: {
      "X-Naver-Client-Id": "LsURc_YAAKetDOHTyqVg",
      "X-Naver-Client-Secret": "9kM0qGd0rM",
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      dispatch({ type: GET_NEWS_LIST_SUCCESS, result });
    })
    .catch((error) => {
      dispatch({ type: GET_NEWS_LIST_FAILURE, error });
    });
};
