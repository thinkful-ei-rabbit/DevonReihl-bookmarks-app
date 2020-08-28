import $ from 'jquery';
import './../styles/index.css';
import 'normalize.css';

import api from './api';
import bookstore from './bookstore';
import bookmarkList from './bookmark-list';



function main () {
  api.getBookmarks()
  .then(bookmarks => {
      console.log(bookmarks)
      bookstore.list =bookmarks;
      bookmarkList.render();
    })
    .catch(error => {
      console.log(error.message);
      bookmarkList.renderError(error.message);
    });
  bookmarkList.eventListeners();
}

$(main);

