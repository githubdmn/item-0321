

const router = require('express').Router();

// create an item
router.post('/item', (req, res) => {
    res.status(404).send('Not POST implemented');
});

// get a list of items // possible paginations and filtering
router.get('/items', (req, res) => {
    res.status(404).send('GET LIST Not implemented');
});

//get an item 
router.get('/item/:id', (req, res) => {
    res.status(404).send('GET single item Not implemented');
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
