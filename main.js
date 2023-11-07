const cardConatiner = document.querySelector('.card-container');


blogDb.forEach(function(item){
  cardConatiner.innerHTML += `<div class="card">
  <img class="cardImage" src="${item.image}" alt=""> 
  <h1>${item.title}</h1> 
  <p>${item.content}</p>
  <a href="single.html?bid=${item.bid}" class="readMore">Read More</a>      
  </div>
  `
})
