const express = require('express')
const router = express.Router()
let horungeCount = 0;
function onGetGuestbook(req, res){
	console.log('GET /guestbook');
	horungeCount++
	res.status(200).send(`Incognito ${horungeCount}.`)
}
router.get('/', onGetGuestbook)
module.exports = onGetGuestbook
