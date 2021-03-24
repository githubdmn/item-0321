



const express = require('express');
const path = require('path');

require('dotenv').config({
	path: path.resolve(__dirname, `.env`)
});

const { PORT } = process.env;

const db = require('./database/mongoose');
db;
const app = require('./router-items/items-router');

express()
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.get('/', (req, res) => { res.status(200).send(`Home - Wed 24 Mar 11:19:22 CET 2021`) })
	.get('/health', (req, res) => { res.status(200).send('OK') })
	.use('/api', app)
	.listen(PORT, () => { console.log(`Listening on port ${PORT} ...`); });








