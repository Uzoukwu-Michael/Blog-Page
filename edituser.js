const urlParams = new URLSearchParams(window.location.search)
let userId = urlParams.get('uid')


const  userName = document.getElementById('userName')
const  userEmail = document.getElementById('userEmail')
const saveChangesButton = document.getElementById('saveChanges')
const userIdInput =  document.getElementById('userId')



const userIndex = userDb.findIndex((u) => { return u.id == userId})
console.log(userIndex)

if(userIndex != -1){

userIdInput.value = userId
userName.value = userDb[userIndex].name
userEmail.value = userDb[userIndex].email
}
else{

  showMessage('Invalid User ID','red')
  document.getElementById('userId').value =  userId
  userName.value = userDb[userIndex].name
userEmail.value = userDb[userIndex].email

}


saveChangesButton.addEventListener('click',function(e){
e.preventDefault()
  userDb[userIndex].name = userName.value
  userDb[userIndex].email = userEmail.value
console.log(userIndex)

  localStorage.setItem('user',JSON.stringify(userDb))
  location.href = "adminusers.html"
})
