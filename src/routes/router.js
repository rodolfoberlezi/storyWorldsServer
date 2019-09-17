const express = require('express');

const userController = require('../controllers/UserController');


const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.get('/user', userController.index);
router.post('/user', userController.store);

module.exports = router;