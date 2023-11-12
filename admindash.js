isLoggedIn()
isAdmin()
const num = document.getElementById('number')
num.textContent = userDb.length

console.log(sessionStorage.getItem('loggedInUserId'))
console.log(sessionStorage.getItem('loggedInUserCode'))