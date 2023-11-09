const usersDiv = document.getElementById('users-div');



function displayUsers(){
  userDb.forEach(function(user){
    // const row = document.createElement('tr')
    // row.innerHTML 
   usersDiv.innerHTML +=
    `
    <tr>
    <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      </tr>
    `
    // usersDiv.appendChild(row)
  })
}
window.onload = displayUsers
// userDb.forEach(function(user){
//   usersDiv.innerHTML += `<tr>
//   <td>${user.id}</td>
//   <td>${user.name}</td>
//   <td>${user.email}</td>
// <buuton>

//   // <div id="users-div">
//   // <h1>${user.id }: ${user.name }: ${user.email}</h1>
//   `
// })
// userDb.forEach(function(user){
// const span = document.createElement('span')
// const li = document.createElement('li')
// li.innerText = user.id + ': ' + ' ' + user.name  + ': ' + ' ' + user.email
// const deleteButton = document.createElement('button')
// const editButton = document.createElement('button')
// deleteButton.textContent = 'Delete'
// deleteButton.addEventListener('click',function(index){
// userDb.splice(index,1)
// localStorage.setItem('blogDb',JSON.stringify(blogDb))
// })
// editButton.textContent = 'Edit'
// editButton.addEventListener('click',function(){
//   const newUserName = prompt("Enter the new user name:" ,user.name)
//   if(newUserName !== null){
//     userDb
//   }
// })


// })
console.log(userDb)


function deleteUser(){
userDb[uid]
}