const express = require('express')
const app = express()
const frontend = require('./routes/frontend.js')
const guestbook = require('./routes/guestbook.js')
const animals  = require('./routes/animals.js')
const PORT = 1337
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Hi')
})
app.get('/secret', (req, res) => {
	console.log('Get /secret');
	res.send('Tja')
})

app.use('/guestbook', guestbook)
app.use('/frontend', frontend)
app.use('/animals', animals)
app.listen(PORT, () =>{
	console.log('Hej ' + PORT);
})
