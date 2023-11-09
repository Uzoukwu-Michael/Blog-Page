function userProfile(user){
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
   profileName.textContent = userDb[loggedInUserId].name;
   profileEmail.textContent = userDb[loggedInUserId].email;
}