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

  // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let passRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let passResult = passRegex.test(password)
  let result = emailRegex.test(email);
  if (!result){
   showMessage('Email is not valid','red')
    return false
  }
  else if(!passResult){
  showMessage('weak password','red')
  return false
  }
  else{
    const user = {
      id: 0,
      name: name,
      email: email,
      password: password,
      userCode: Math.random().toString(32).slice(2)
    }
    userDb.forEach(user => {
      if(user.email === email){
   showMessage("User already registered",'red') 
   registered = true
      }
    })  
  if(registered === false){
      userDb.push(user)
      userDb[userDb.length -1].id = userDb.length
       localStorage.setItem('user',JSON.stringify(userDb))
       alert("User created")
       location.href = 'login.html'
  }

  }
})
