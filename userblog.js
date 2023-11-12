const image = document.querySelector('#img01');
// const h1= document.querySelector('.h1');
// const para = document.querySelector('.para');
const cardConatiner = document.getElementById('card-container')
// const blogIndex = blogDb.findIndex(function(blog01){
//  return  blog01.bid == bid
//  getAllUserBlogs(bid)
//   })
  
 
// console.log(blogDb.indexOf(blogDb[bid]))
// image.src = blogDb[loggedInUserId-1].image;
// h1.textContent = blogDb[loggedInUserId-1].title;
// para.textContent = blogDb[loggedInUserId-1].content;


blogDb.forEach(function(item){
  cardConatiner.innerHTML += `<div class="card">
  <img class="cardImage" src="${item.image}" alt=""> 
  <h1>${item.title}</h1> 
  <p>${item.content}</p>
  // <a href="single.html?bid=${item.bid}" class="readMore">Read More</a>      
  </div>
  `
})

