const express = require('express');

const userController = require('../controllers/UserController');
const universeController = require('../controllers/UniverseController');
const bookController = require('../controllers/BookController');
const characterController = require('../controllers/CharacterController');
const affiliationController = require('../controllers/AffiliationController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.get('/user', userController.index);
router.post('/user', userController.store);

router.post('/universe', universeController.store);

router.post('/book', bookController.store);

router.post('/character', characterController.store);

router.post('/affiliation', affiliationController.store);

module.exports = router;