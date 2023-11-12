const usersDiv = document.getElementById('users-div');


displayUsers()

function displayUsers(){

usersDiv.innerHTML = ''

  userDb.forEach(function(user){
  usersDiv.innerHTML += `    <tr id="rows">
  <td>${user.id}</td>
  <td>${user.name}</td>
  <td>${user.email}</td>
  <td><button class="editbtn"><a href="editUser.html?uid=${user.id}">Edit</a></button></td>
  <td><button id="delbtn">Delete</button></td>

</tr>
` 

  })
}


const btns = document.querySelectorAll('#delbtn')
console.log(btns)
const arrayBtns = Array.from(btns)
console.log(arrayBtns)

arrayBtns.forEach((btn)=> {

  btn.addEventListener('click',(index)=>{
    // userDb.splice(index,1)
    // localStorage.setItem('user',JSON.stringify(userDb))
    // btn.parentElement.parentElement.remove()
  //  console.log(btn.previousSibling)
  //  console.log(btn.nextSibling)
  //  console.log(btn.previousElementSibling)
  //  console.log(btn.nextElementSibling)
  //  console.log(btn.parentElement.previousSibling)
  //  console.log(btn.parentElement.parentElement.children)
  //  console.log(btn.childNodes)
  //  console.log(btn.children)

     console.log(btn.closest('.editbtn'))





    
    // location.reload()
  })

})

  
 


// })


// const a = {value:10}
// let b = a

// b.value++
// console.log(a)
// console.log(b)

