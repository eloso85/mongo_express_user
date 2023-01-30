const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post('/user/create', user_controller.user_add);

module.exports = router;