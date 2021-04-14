const express = require('express')
const app = express()
const frontend = require('./routes/frontend.js')
const PORT = 1337
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Hi')
})
app.get('/secret', (req, res) => {
	console.log('Get /secret');
	res.send('Tja')
})
app.use('/frontend', frontend)
app.listen(PORT, () =>{
	console.log('Hej ' + PORT);
})
