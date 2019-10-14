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

router.post('/users', userController.store);
router.get('/users', userController.index);
router.get('/users/:id', userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.post('/universes', universeController.store);
router.get('/universes', universeController.index);
router.get('/universe/:id', universeController.show);

router.post('/books', bookController.store);
router.get('/books/:id', bookController.show);

router.post('/characters', characterController.store);
router.get('/characters/:id', bookController.show);

router.post('/affiliations', affiliationController.store);
router.get('/affiliations/:id', bookController.show);

module.exports = router;