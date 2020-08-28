import bookstore from './bookstore';


function listHeader() {
  return `
  <div class='js-error-message hidden'></div>
    <h2>Bookmarks</h2>
    <div class='bookmark-controls'>
      <button class='button' id='new-bookmark'>Add New Bookmark</button>
      <label for='filter-by-rating'>Filter By Min Rating</label>
      <select id='filter-by-rating'>
        <option value="" ${bookstore.filterBy === '' ? 'selected="selected"' : ''}>All</option>
        <option value="1" ${bookstore.filterBy === 1 ? 'selected="selected"' : ''}>1</option>
        <option value="2" ${bookstore.filterBy === 2 ? 'selected="selected"' : ''}>2</option>
        <option value="3" ${bookstore.filterBy === 3 ? 'selected="selected"' : ''}>3</option>
        <option value="4" ${bookstore.filterBy === 4 ? 'selected="selected"' : ''}>4</option>
        <option value="5" ${bookstore.filterBy === 5 ? 'selected="selected"' : ''}>5</option>
      </select>
    </div>
    <form id='js-form' class='hidden'></form>
    <section role='region'>
      <div class='js-list-header'></div>
      <ul class='js-bookmark-list'></ul>
    </section>
    
    

  `;
}

function error(message) {
  return `
    ${message}
    <span id='close-error-msg'><i class="fas fa-times"></i></span>
  `;
}

function form() {
  return `
    <div class='form-field'>
      <label for='bookmark-title'>Title</label>
      <input type='text' name='title' id='bookmark-title'>
    </div>

    <div class='form-field'>
      <label for='bookmark-url'>Url</label>
      <input type='text' name='url' id='bookmark-url'>
    </div>

    <div class='form-field description'>
      <label for='bookmark-desc'>Description</label>
      <textarea form='js-form' name='desc' id='bookmark-desc'></textarea>
    </div>

    <fieldset class='form-field'>
      <legend> Rating </legend>
      <span class="star-cb-group">
        <input type="radio" id="rating-5" name="rating" value="5"/>
        <label for="rating-5"></label>
        <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
        <label for="rating-4"></label>
        <input type="radio" id="rating-3" name="rating" value="3"/>
        <label for="rating-3"></label>
        <input type="radio" id="rating-2" name="rating" value="2"/>
        <label for="rating-2"></label>
        <input type="radio" id="rating-1" name="rating" value="1" />
        <label for="rating-1"></label>
      </span>
    </fieldset>

    <div class='form-controls'>
      <button class='button' type='submit'>Create</button>
      <button class='button' type='button' id='close-form'>Cancel</button>
    </div>
  `;
}

// function editForm(bookmark) {
//   return `
//     <li class='bookmark' data-id='${bookmark.id}'>
//       <div class='header'>
//         <i class="fas fa-chevron-up"></i>
//         <h3>${bookmark.title}</h3>
//       </div>
      
//       <div class='body'>
//         <form id='js-edit-form'>
//           <div class='description'>
//             <label style='display:block;' for='edit-bookmark-desc'>Description</label>
//             <textarea form='js-edit-form' name='desc' id='edit-bookmark-desc'>${bookmark.desc ? bookmark.desc : 'no description given'}</textarea>
//           </div>
//           <div class='rating'>
//             <fieldset>
//               <legend> Rating </legend>
//                 <label> <input type="radio" name="rating" value="1" ${bookmark.rating === 1 ? 'checked="checked"' : ''}> 1 </label>
//                 <label> <input type="radio" name="rating" value="2" ${bookmark.rating === 2 ? 'checked="checked"' : ''}> 2 </label>
//                 <label> <input type="radio" name="rating" value="3" ${bookmark.rating === 3 ? 'checked="checked"' : ''}> 3 </label>
//                 <label> <input type="radio" name="rating" value="4" ${bookmark.rating === 4 ? 'checked="checked"' : ''}> 4 </label>
//                 <label> <input type="radio" name="rating" value="5" ${bookmark.rating === 5 ? 'checked="checked"' : ''}> 5 </label>
//             </fieldset>
//             <span class='edit-bookmark'><a href='#'>cancel edit</a></span>
//             <span class='remove-bookmark'><i class="far fa-trash-alt"></i></span>
//           </div>
//           <button type='submit' class='button small'>Update Bookmark</button>
//         </form>
//       </div>
//     </li>
//   `;
// }

function rating(rating) {
  rating = Number(rating);
  let html = '';
  for (let i=0; i<rating; i++) {
    html += '<i class="fas fa-star"></i>';
  }
  return html;
}

function bookmarkListView(bookmark) {
  return `
    <li class='bookmark' data-id='${bookmark.id}'>
      <div class='header'>
        <i class="fas fa-chevron-down"></i>
        <h3>${bookmark.title}</h3>
      </div>
      
      <div class='body'>
        <div class='rating'>
        ${bookmark.rating ? rating(bookmark.rating) : 'no rating given'}
          <span class='remove-bookmark'><i class="far fa-trash-alt"></i></span>
        </div>
      </div>
    </li>
  `;
}

function bookmarkExpandedView(bookmark) {
  return `
    <li class='bookmark' data-id='${bookmark.id}'>
      <div class='header'>
        <i class="fas fa-chevron-up"></i>
        <h3>${bookmark.title}</h3>
      </div>
      
      <div class='body'>
        <p>
          ${bookmark.desc ? bookmark.desc : 'no description given'}
        </p>
        <a class='button small' href='${bookmark.url}' target='_blank'>Visit Site</a>
        <div class='rating'>
        ${bookmark.rating ? rating(bookmark.rating) : 'no rating given'}
          <span class='edit-bookmark'><i class="far fa-edit"></i></span>
          <span class='remove-bookmark'><i class="far fa-trash-alt"></i></span>
        </div>
      </div>
    </li>
  `;
}


export default {
  listHeader,
  error,
  form,
  // editForm,
  rating,
  bookmarkListView,
  bookmarkExpandedView
};