import $ from 'jquery';
import 'normalize.css';
import './../styles/index.css';

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

function generateBookmarkListItems (){
  return `<li>
  <h3>Title</h3><br>
  <a href="url">link text</a><br><br>
  <div class="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
  </div>
  <div class="bookmark-control-panel"><button class="bookmark-edit">
  <span class="button-label">check</span>
</button>
<button class="bookmark-delete">
<span class="button-label">delete</span>
</button></div></li>`;
}
function generateBookmarkDetails (){
  return `<div class="conatiner">
  <h3>Title</h3><br>
  <a href="url">link text</a><br><br>
  <div class="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
  </div><br>
    <p>Master cleanse blog marfa scenester, +1 swag cornhole heirloom bitters polaroid leggings 
    copper mug gluten-free. Bitters chia edison bulb, kogi banh mi polaroid locavore direct trade 
    cornhole small batch migas vegan affogato. Meh thundercats cronut, bitters disrupt af seitan
    normcore shaman. Skateboard jianbing cloud bread cornhole. Selfies af chia, stumptown next 
    level celiac sartorial vaporware portland ethical mustache VHS waistcoat trust fund.</p>
</div>`;
}

// function renderBookmarkInfo(){
//   console.log('Where is bookmark info?');
//   $('#bookmark-info').html(generateBookmarkInfo());
// }
// const handleBookmarkInfo = function(){
//   $('.bookmarkStart').on('click', '#startBookmark', event => {
//     event.preventDefault();
//     renderBookmarkInfo();
//   });
// }

// const handleDeleteBookmark = function (){

// }

// const handleFilterBookmark = function (){
//   // $('.js-filter-checked').click(() => {
//   //   store.toggleCheckedFilter();
//   //   render();
//   // });
// };

// const eventListeners = function () {
//   handleBookmarkInfo();
//   handleNewBookmarkSubmit();
//   handleDeleteBookmark();
//   handleEditBookmark();
//   handleFilterBookmark();
//   handleCloseError();
// }


// export default{
//   render(),
//   eventListeners()
// };