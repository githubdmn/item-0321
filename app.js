



const express = require('express');
const path = require('path');

require('dotenv').config({
	path: path.resolve(__dirname, `.env`)
});

const { PORT } = process.env;


express()
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', (req, res) => { res.status(200).send('Home - item-0321 app 14:15 20') })
	.get('/health', (req, res) => { res.status(200).send('OK') })
	.listen(PORT, () => { console.log(`Listening on port ${PORT} ...`); });








