const usersDiv = document.getElementById('users-div');


displayUsers()

function displayUsers(){

usersDiv.innerHTML = ''

  userDb.forEach(function(user){

    const userRow = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    

    td1.innerText = user.id;
    td2.innerText = user.name;
    td3.innerText = user.email;

    const editButton = document.createElement('button');
    editButton.innerHTML = `<a target="_blank" href="editUser.html?uid=${user.id}">Edit</a>`
    const deleteButton = document.createElement('button');

     
    deleteButton.textContent = 'Delete'

 
    td4.append(editButton);
    td5.append(deleteButton);


    

   userRow.append(td1,td2,td3,td4,td5)
   usersDiv.append(userRow)
    

       deleteButton.addEventListener('click',function(){

      const userIndex = userDb.findIndex(function(user01){

       return  user01.id == user.id
      
    })

    if(userIndex == -1){
      return 'This user does not exist'
     }

  userDb.splice(userIndex,1)
  localStorage.setItem('user',JSON.stringify(userDb))
  displayUsers()
  })

  })

  }
  
  



// })


// const a = {value:10}
// let b = a

// b.value++
// console.log(a)
// console.log(b)

