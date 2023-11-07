const urlParams = new URLSearchParams(window.location.search);
const bid = urlParams.get('bid');
const blogContent = document.getElementById('blog-content');

blogDb.forEach(function(item){
if(item.bid === bid){
  blogContent.textContent = item.content;
}
})