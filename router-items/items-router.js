
const router = require('express').Router();

const ItemsService = require('./items-service');

// create an item
router.post('/item', (req, res) => {
    res.status(404).send('a');
});

// get a list of items // possible paginations and filtering
router.get('/items', async (req, res) => {
    await ItemsService.Create();
    res.status(200).send(await ItemsService.GetAll());
});

//get an item 
router.get('/item/:id', async (req, res) => {
    res.status(200).send(`${await ItemsService.GetAll}`);
});

// update an item
router.patch('/item/:id', (req, res) => {
    res.status(404).send('PATCH Not implemented');
});

// delete and item
router.delete('/item/:id', (req, res) => {
    res.status(404).send('DELETE Not implemented');
});

module.exports = router;
