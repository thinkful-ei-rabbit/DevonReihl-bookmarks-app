import $ from 'jquery';
import './../styles/index.css';
import 'normalize.css';

import templates from './templates';
import api from './api';
import bookstore from './bookstore';

$.fn.extend({
  serializeJson: function () {
    const formData = new FormData(this[0]);
    const obj = {};
    formData.forEach((val, name) => obj[name] = val);
    return JSON.stringify(obj);
  }
});

//render functions
function render(filteredList=null){
  if (bookstore.isAdding) {
    $('#js-form').html(templates.form());
    $('#js-form').show();
  } else {
    $('#js-form').html('');
    $('#js-form').hide();
  }

  if (bookstore.list.length === 0) {
    $('.js-bookmark-list').html('');
    return $('.js-no-bookmarks-intro').html(templates.noBookmarks());
  }

  const bookmarks = filteredList ? filteredList : bookstore.list;
  const bookmarkTemplate = bookmarks.map(bookmark => buildBookmarkHtml(bookmark));

  $('.js-no-bookmarks-into').html('');
  $('.js-list-header').html(templates.listHeader());
  $('.js-bookmark-list').html(bookmarkTemplate);
}

function renderError(message){
  $('.js-error-message').html(templates.error(message));
  $('.js-error-message').show();
}

function buildBookmarkHtml(bookmark){
  if (bookmark.isEditing) {
    return templates.editForm(bookmark);
  } else if (bookmark.isExpanded) {
    return templates.bookmarkExpandedView(bookmark);
  } else {
    return templates.bookmarkListView(bookmark);
  }
}

//event listeners
function displayForm() {
  $('.container').on('click', '#new-bookmark', function() {
    bookstore.isAdding = true;
    render();
  });
}
function formClose() {
  $('.container').on('click', '#close-form', function(){
    bookstore.isAdding =false;
    render();
  });
}

function formSubmit() {
  $('.container').on('submit', 'form#js-form', function(event){
    event.preventDefault();
    const data = $(event.target).serializeJson();
    api.addBookmark(data)
      .then(bookmark => {
        bookstore.addBookmark(bookmark);
        render();
      })
      .catch(error => {
        renderError(error.message);
      });
  });
}

function toggleBookmarkView(){
  // eslint-disable-next-line quotes
  $('.js-bookmark-list').on('click', '.header', function(){
    const id = $(this).closest('li').data('id');
    bookstore.toggleExpandedView(id);
    render();
  });
}

function bookmarkDelete(){
  $('.js-bookmark-list').on ('click', '.remove-bookmark', function(){
    const id = $(this).closest('li').data('id');
    api.deleteBookmark(id)
      .then(() => {
        bookstore.deleteBookmark(id);
        render();
      })
      .catch(error => {
        renderError(error.message);
      });
  });
}

function filterByRating() {
  $('.container').on('change', 'select', function(){
    const rating = $(this).val();
    const filteredList = bookstore.filterByRating(rating);
    render(filteredList);
  });
}

function closeError() {
  $('.container').on('click', '#close-error-msg', function() {
    $(this).closest('div').hide();
  });
}

function toggleEditForm() {
  $('js-bookmark-list').on('click', '.edit-bookmark', function() {
    const id = $(this). closest('li').data('id');
    bookstore.toggleEditing(id);
    render();
  });
}

function editFormSubmit(){
  $('.js-boomark-list').on('click', 'form#js-edit-form', function(event) {
    event.preventDefault();
    const id = $(this).closest('li').data('id');
    const data = $(event.target).serializeJson();
    api.updateBookmark(id, data)
      .then(() => {
        bookstore.updateBookmark(id, data);
        render();
      })
      .catch(error => {
        renderError(error.message);
      });
  });
}

const eventListeners = function () {
  displayForm();
  formClose();
  formSubmit();
  toggleBookmarkView();
  bookmarkDelete();
  filterByRating();
  closeError();
  toggleEditForm();
  editFormSubmit();
};

export default{
  render,
  eventListeners
};