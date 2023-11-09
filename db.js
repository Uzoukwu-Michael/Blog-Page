let blogDb = [];
let userDb = [];
let loggedInUserId = null;
let adminDb = [];
let loggedInUserCode = null;
const notification = document.getElementById('message');



// handle loggedInId db
if(sessionStorage.getItem('loggedInUserId') == null){
 
   sessionStorage.setItem('loggedInUserId',JSON.stringify(loggedInUserId))
}
else{
  loggedInUserId = JSON.parse(sessionStorage.getItem('loggedInUserId'))

}

// handle loggedIn usercode
if(sessionStorage.getItem('loggedInUserCode') == null){
 
  sessionStorage.setItem('loggedInUserCode',JSON.stringify(loggedInUserCode))
}
else{
 loggedInUserCode = JSON.parse(sessionStorage.getItem('loggedInUserCode'))

}


// handle user db
if(localStorage.getItem('user') === null){
  localStorage.setItem('user',JSON.stringify(userDb))
}
else{
 userDb = JSON.parse(localStorage.getItem('user'))
}


// handle blog db
if(localStorage.getItem('blogDb') === null){
  localStorage.setItem('blogDb',JSON.stringify(blogDb))
}
else{
 blogDb = JSON.parse(localStorage.getItem('blogDb'))
}

// handle for admin db
if(localStorage.getItem('adminDb') === null){
  localStorage.setItem('adminDb',JSON.stringify(adminDb))
}
else{
 adminDb = JSON.parse(localStorage.getItem('adminDb'))
}


function getBlog(bid){
  const blogIndex = blogDb.findIndex(function(blog01){
    return  blog01.bid == bid
     }) 
     
     if(blogIndex == -1){
      return 'This Blog does not exist'
     }

  return blogDb[blogIndex]
}

function getAllBlogs(){
  return blogDb
}

// get all user blogs
function getAllUserBlogs(uid){
  return blogDb.filter(function(blog){
    uid === blog.uid
  })
}

function createBlog(image,title,content,uid){
  if(image === null || image === undefined || title === null || title === undefined || content=== null || content=== undefined ||  uid === null || uid === undefined) {
    return false
  }
  const blog = {
    bid: 0,
    uid: uid,
    image: image,
    title: title,
    content: content,
    createdAt:  Date('H:i:s dd-mm-YY'),
    updatedAt:  Date('H:i:s dd-mm-YY'),
    approved: 0
  }
  blogDb.push(blog);
  console.log(blogDb)
  console.log(blogDb[blogDb.length-1])

  blogDb[blogDb.length-1].bid = blogDb.length;
 localStorage.setItem('blogDb', JSON.stringify(blogDb));
 return true
}

function updateBlog(bid,image,title,content,uid,approved){
  const blogIndex = blogDb.findIndex(function(blog01){
    return  blog01.bid == bid
     }) 
     
     if(blogIndex == -1){
      return 'This Blog does not exist'
     }
 blogDb[blogIndex].image = image === null || image === '' ? blogDb[blogIndex].image: image 
 blogDb[blogIndex].title = title === null || title === '' ? blogDb[blogIndex].title: title 
 blogDb[blogIndex].content = content === null || content === '' ? blogDb[blogIndex].content: content 
 blogDb[blogIndex].uid = uid === null || uid === '' ? blogDb[blogIndex].uid: content 
 blogDb[blogIndex].updatedAt = Date('H:i:s dd-mm-YY')
 blogDb[blogIndex].approved = approved
localStorage.setItem('blogDb',JSON.stringify(blogDb))
}

 function deleteBlog(bid){
  const blogIndex = blogDb.findIndex(function(blog01){
    return  blog01.bid == bid
     })   

     if(blogIndex == -1){
      return 'This Blog does not exist'
     }
    blogDb.splice(blogIndex, 1)
  localStorage.setItem('blogDb',JSON.stringify(blogDb))
 }

 // authorization functions

 // restrict users that are not logged in
 function pageAuth(){
if(loggedInUserId == null || loggedInUserCode == null || loggedInUserId == undefined || loggedInUserCode == undefined){
  location.href = 'login.html'
}
 }

 // log out function
function logout(){
  loggedInUserCode = null
  sessionStorage.setItem('loggedInUserCode',JSON.stringify(loggedInUserCode))
  loggedInUserId = null
  sessionStorage.setItem('loggedInUserId',JSON.stringify(loggedInUserId))
  location.href = 'index.html'
}


// notification message
function showMessage(mes,kolor){
 notification.textContent = mes;
 notification.style.backgroundColor = kolor;
 notification.style.display = 'block';

 setTimeout(function(){
  notification.style.display = 'none'
 },3000)
}


function isAdmin(){
  if(loggedInUserId !== null && loggedInUserCode !== null){
    const userMail = userDb.email
    const userPass = userDb.loggedInUserCode
    for(let i = 0;i < adminDb.length;i++){
      if(userMail == adminDb[i].email && userPass == adminDb[i].loggedInUserCode){
        let myAdmin = true
        // return
      }
      else{
        myAdmin = false
        showMessage('You are not Admin','red')
        return
      }
    }
  }
}

// adminDb.push({
//   id:2,
// name: "Admin",
// email: "admin@gmail.com",
// password: "admin123",
// userCode:  Math.random().toString(32).slice(2) 
// })
//  localStorage.setItem('adminDb',JSON.stringify(adminDb))

//  let re = createBlog('assets/image5.jpeg','Blog3','this is blog3',3)
// if(re){
//   console.log('blog created successfully')
// }
// else{
//   console.log('blog not created please fill all fields')
// }
// deleteBlog(1)
// console.log(updateBlog(4,'','Blog4','',''))
// console.log(getBlog(4))
