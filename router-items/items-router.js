
const router = require('express').Router();

const ItemsService = require('./items-service');

// create an item
router.post('/item', async (req, res) => {
    try {
        // TODO: implement data validation
        const item = req.body;
        const result = await ItemsService.Create(item);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

// get a list of items // possible paginations and filtering
router.get('/items', async (req, res) => {
    res.status(200).send(await ItemsService.GetAll());
});

//get an item 
router.get('/item/:id', async (req, res) => {
    try {
        res.status(200).send(await ItemsService.Get(req.params.id));
    } catch (error) {
        res.status(400).send(error);
    }
});

// update an item
router.patch('/item/:id', async (req, res) => {
    try {
        // TODO: implement data validation
        const item = req.body;
        const result = await ItemsService.Update(req.params.id, item);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

// delete and item
router.delete('/item/:id', async (req, res) => {
    try {
        const result = await ItemsService.Delete(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(4).send(error);
    }
});

// delete all item
router.delete('/all', async (req, res) => {
    try {
        const result = await ItemsService.DeleteAll();
        res.status(200).send(result);
    } catch (err) {
        res.status(4).send(err);
    }
});

module.exports = router;
