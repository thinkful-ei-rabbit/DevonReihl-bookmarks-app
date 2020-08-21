function addBookmark(bookmark){
  this.list.push(bookmark);
  this.isAdding = false;
}

function deleteBookmark(id) {
  const index = this.list.findIndex(bookmark => bookmark.id === id);
  this.list.splice(index, 1);
}

function updateBookmark(id, data) {
  data = JSON.parse(data);
  const bookmark = this.findById(id);
  bookmark.isEditing = false;
  bookmark.isExpanded = true;
  Object.keys(data).forEach(key => {
    bookmark[key] =(key === 'rating') ? Number(data[key]) : data[key];
  });
}

function toggleExpandedView(id) {
  const bookmark = this.findById(id);
  bookmark.isExpanded = !bookmark.isExpanded;
}

function toggleEditing(id) {
  const bookmark = this.findById(id);
  bookmark.isEditing = !bookmark.isEditing;
}

function filterByRating(rating) {
  this.filterBy = Number(rating);
  if (rating) {
    return this.list.filter(bookmark => bookmark.rating && bookmark.rating >= this.filterBy);
  }
  return this.list;
}

function findById(id) {
  return this.list.find(bookmark => bookmark.id === id);
}


export default{
  list: [],
  isAdding: false,
  filterBy: '',
  addBookmark,
  toggleExpandedView,
  findById,
  deleteBookmark,
  filterByRating,
  toggleEditing,
  updateBookmark
};