



const express = require('express');
const path = require('path');

require('dotenv').config({
	path: path.resolve(__dirname, `.env`)
});

const { PORT } = process.env;


const app = require('./router-items');

express()
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', (req, res) => { res.status(200).send(`Home - item-0321 app ${Date.now()}`) })
	.get('/health', (req, res) => { res.status(200).send('OK') })
	.use('/api', app)
	.listen(PORT, () => { console.log(`Listening on port ${PORT} ...`); });








