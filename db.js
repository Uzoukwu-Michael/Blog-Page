let blogDb = [];
let userDb = [];
let loggedInUserId = 0;

if(localStorage.getItem('blogDb') === null){
  localStorage.setItem('blogDb',JSON.stringify(blogDb))
}
else{
 blogDb = JSON.parse(localStorage.getItem('blogDb'))
}


function getBlog(bid){
  return blogDb[bid-1]
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
 blogDb[bid-1].image = image === null || image === '' ? blogDb[bid-1].image: image 
 blogDb[bid-1].title = title === null || title === '' ? blogDb[bid-1].title: title 
 blogDb[bid-1].content = content === null || content === '' ? blogDb[bid-1].content: content 
 blogDb[bid-1].uid = uid === null || uid === '' ? blogDb[bid-1].uid: content 
 blogDb[bid-1].updatedAt = Date('H:i:s dd-mm-YY')
 blogDb[bid-1].approved = approved
localStorage.setItem('blogDb',JSON.stringify(blogDb))
}

 function deleteBlog(bid){
    blogDb.splice(bid-1, 1)
  localStorage.setItem('blogDb',JSON.stringify(blogDb))
 }

//  let re = createBlog('assets/image5.jpeg','Blog12','this is blog 12fbnefbfnbnfbndfndfbndbbfbfbdbsvsvssfsfs',2)
// if(re){
//   console.log('blog created successfully')
// }
// else{
//   console.log('blog not created please fill all fields')
// }
// deleteBlog(1)