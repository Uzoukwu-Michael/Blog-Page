const resetPasswordForm = document.getElementById('resetPasswordForm');
const currentPassword = document.getElementById('currentPassword');
const newPassword = document.getElementById('newPassword');

userDb.forEach(user =>{
 user.password = newPassword
})
function resetPassword(currentPassword,newPassword){
  if(currentPassword == userDb.loggedInUserId.password){
    userDb.loggedInUserId.password = newPassword
  }
}