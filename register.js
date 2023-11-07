const registrationForm = document.getElementById('registrationPageForm');
const registrationEmail = document.getElementById('registrationEmail');
const registrationName = document.getElementById('registrationName');
const registrationPassword = document.getElementById('registrationPassword');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', function(e){
  e.preventDefault();
  const name =  registrationName.value
  const email = registrationEmail.value
  const password = registrationPassword.value
  let registered = false

    const user = {
      id: 0,
      name: name,
      email: email,
      password: password,
      userCode: 0
    }
    console.log(user)
    userDb.forEach(user => {
      if(user.email === email){
   alert("User already registered") 
   registered = true
      }
    })  
  if(registered === false){
      userDb.push(user)
      userDb[userDb.length -1].id = userDb.length
       console.log(userDb)
       localStorage.setItem('user',JSON.stringify(userDb))
       alert("User created")
  }
  console.log(userDb)


})
