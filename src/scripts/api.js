const BASE_URL = 'https://thinkful-list-api.herokuapp.com/devon/bookmarks';


function bookmarkApi(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = {code: res.status};
      }
      return res.json();
    })
    .then(jsonData => {
      if (error) {
        error.message = jsonData.message;
        return Promise.reject(error);
      }
      console.log(jsonData);
      return jsonData;
      
    });
}

function getBookmarks(){
  return bookmarkApi(BASE_URL);
}

function addBookmark(data) {
  return bookmarkApi(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  });
}

function deleteBookmark(id) {
  return bookmarkApi(`${BASE_URL}/${id}`,{
    method: 'DELETE'    
  });
}

function updateBookmark(id, data) {
  return bookmarkApi(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: data
  });
}

export default {
  addBookmark,
  getBookmarks,
  deleteBookmark,
  updateBookmark
};
