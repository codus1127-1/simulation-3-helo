require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SECRET
}))

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.post('/auth/logout', ctrl.logout)

app.get('/api/posts/', ctrl.getPosts)
app.get('/api/post/:postid', ctrl.getOnePost)
// app.post('/api/post/new/:userid', ctrl.addPost)
app.post('/api/post/:postid', ctrl.addPost)

app.get('/api/auth/me', ctrl.findUser)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})