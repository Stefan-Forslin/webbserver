const express = require('express')
const router = express.Router()
let fakeDb = [
	{species: 'Lejon', favoriteFood: 'Zebra'},
	{species: 'Tiger', favoriteFood: 'Trapir'},
	{species: 'Grävling', favoriteFood: 'Insekter'},
	{species: 'Vithaj', favoriteFood: 'Sjölejon'},
	{species: 'Kodiakbjörn', favoriteFood: 'Älg'}
]
router.get('/', (req, res) =>{
	console.log('GET /animals/', req.body);
	let newAnimal = req.body
	res.send(fakeDb)
})
router.post('/', (req, res) =>{
	console.log('POST /animals/');
	let newAnimal = {species: 'Blåval', favoriteFood: 'Krill'}
	fakeDb.push(newAnimal)
	res.send('la till ett djur')
})
router.put('/', (req, res) => {
	console.log('PUT /animals');
	let replaceAnimal = {species: 'Broms', favoriteFood: 'Kött'}
	let lastIndex = fakeDb.length - 1
	fakeDb[lastIndex] = replaceAnimal
	res.send('Bytte ut djur')
})
router.delete('/', (req, res) => {
	console.log('DELETE /animals');
	fakeDb = []
	res.send('Tog bort ett djur')
})
module.exports = router
