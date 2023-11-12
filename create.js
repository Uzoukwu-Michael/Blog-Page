const urlParams = new URLSearchParams(window.location.search)
let userId = urlParams.get('uid')
const userIndex = userDb.findIndex((u) => { return u.id == userId})
const blogForm = document.getElementById('blogform')
const img = document.getElementById('image').value;
const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const ud = document.getElementById('uid').value;
createBlog(img,title,content,ud)
// if(userIndex != -1){

  ud.value= userId
// }  bid=${item.bid}

blogForm.addEventListener('submit',async (event) => {
  event.preventDefault()
  const formData = new formData(blogForm)
  const blogz =  createBlog(formData)
  location.href= 'userblog.html?bid=${blog.uid}'
})
