const express = require('express');
const router = express.Router();

const usersController = require("../controllers/users")

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.creatUser);

router.put('/:id', usersController.updateUSer);

router.get('/', usersCsontroller.deleteUser);

module.exports = router;