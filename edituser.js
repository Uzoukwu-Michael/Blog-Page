const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('uid')
const user = userDb.find(u => u.id == userId)
if(user){
  userId = document.getElementById('userId').value
 const  userName = document.getElementById('userName').value
 const  userEmail = document.getElementById('userEmail').value
  const saveChangesButton = document.getElementById('saveChanges')
  saveChangesButton.addEventListener('click',function(){
    user.name = userName
    user.email = userEmail
    localStorage.setItem('user',JSON.stringify(userDb))
    window.location.href = "users.html"
  })
}