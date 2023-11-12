pageAuth()
const p = document.getElementById('welcome')
p.textContent = "Welcome, " + userDb[loggedInUserId-1].name
p.style.color = 'white'
p.style.fontSize = '27px'
const userBlog = blogDb.filter(blog => blog.uid == loggedInUserId-1)
const totalBlogs = userBlog.length
const number = document.getElementById('num')
number.textContent = totalBlogs
