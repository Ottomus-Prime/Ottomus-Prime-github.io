const express = require('express');

const router = express.Router();

const getCommands = require('../models/commands');

router.get('/commands', getCommands.getCommandData);


module.exports = router;