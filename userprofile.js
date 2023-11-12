const profile = document.getElementById('profile');


userProfile()
function userProfile(){
  const use = userDb[loggedInUserId-1]
profile.innerHTML = `<p class="p"><strong>Name:</strong> ${use.name}</p>
<p class="p"><strong>Email:</strong> ${use.email}</p>`
  // const profileName = document.getElementById('profileName');
  // const profileEmail = document.getElementById('profileEmail');
  //  profileName.innerHTML = userDb[loggedInUserId].name;
  //  profileEmail.innerHTML = userDb[loggedInUserId].email;
}