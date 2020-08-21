import $ from 'jquery';
import './../styles/index.css';
import 'normalize.css';

import templates from './templates.js';
import bookmarkList from './bookmark-list';
import bookstore from './bookstore';

function generateBookmarkInfo(){
  return `<div class="container infoBox">
  <form>
    <label for="title" >Title:</label>
    <input type="text" name="title" placeholder="e.g. YouTube.com"><br><br>
    <label for="descr">Description:</label><br>
    <textarea id="w3review" name="w3review" rows="4" cols="50">
    </textarea><br><br>  

    <span class="star-cb-group">
      <input type="radio" id="rating-5" name="rating" value="5" />
      <label for="rating-5">5</label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
      <label for="rating-4">4</label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label for="rating-3">3</label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label for="rating-2">2</label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label for="rating-1">1</label>
      <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" />
      <label for="rating-0">0</label>
    </span><br><br>

    <button type="submit" value="Submit">Submit</button>
    <button type="reset" value="Reset">Reset</button>
  </form>`;
}

function renderBookmarkInfo(){
  console.log('Where is bookmark info?');
  $('#bookmark-info').html(generateBookmarkInfo());
}
const handleBookmarkInfo = function(){
  $('#bookmark-info').on('click', '#startBookmark', event => {
    event.preventDefault();
    console.log('button clicked?');
    renderBookmarkInfo();
  });
};

$(handleBookmarkInfo);

// const main = function(){
//   // api.getMarks()
//   //   .then((marks)) => {
//   //     marks.forEach((mark) => bookstore.addItem(mark));
//   //   }
//   bookmarkList.render();
//   bookmarkList.eventListeners();
//   console.log('main function ran');

// };


