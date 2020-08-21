const BASE_URL = 'https://thinkful-list-api.herokuapp.com/devon/bookmarks';

function boommarkApi(...args){
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok){
        error = {code: res.status};
      }
      return res.json();
    })
    .then(jsonData => {
      if (error) {
        error.message = jsonData.message;
        return Promise.reject(error);
      }
      return jsonData;
    });
}