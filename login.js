const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const loginFrom = document.getElementById('loginForm');

if(localStorage.getItem('loggedInUserId')){
 
  loggedInUserId = JSON.parse(localStorage.getItem('loggedInUserId'))
}

if(localStorage.getItem('user') === null){
  localStorage.setItem('user',JSON.stringify(userDb))
}
else{
 userDb = JSON.parse(localStorage.getItem('user'))
}

loginButton.addEventListener('click',function(e){
  e.preventDefault()
  const loginemail = loginEmail.value
  const loginpassword = loginPassword.value
  let loggedIn = false
  console.log(userDb)

  userDb.forEach(user => {
    if(user.email === loginemail && user.password === loginpassword){
      alert("Login successful")
      loggedIn = true
      loggedInUserId = user.id
      localStorage.setItem('loggedInUserId',JSON.stringify(loggedInUserId))
      console.log(user)

    }
    else{
      alert("Login failed")
    }  
  })
})


