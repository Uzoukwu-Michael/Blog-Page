const urlParams = new URLSearchParams(window.location.search);
const bid = urlParams.get('bid');
const image = document.querySelector('#img01');
const h1= document.querySelector('.h1');
const para = document.querySelector('.para');
console.log(bid)
console.log(blogDb)
//  const filteredBlog = blogDb.filter(function(blog01){
//  if(blog01.bid == bid){
//   return blog01
//  }
//  })
// console.log(blogDb.findIndexOf(filteredBlog))
const blogIndex = blogDb.findIndex(function(blog01){
 return  blog01.bid == bid
  })
  
 
// console.log(blogDb.indexOf(blogDb[bid]))
image.src = blogDb[blogIndex].image;
h1.textContent = blogDb[blogIndex].title;
para.textContent = blogDb[blogIndex].content;

