const express = require('express');
const { redirect } = require('express/lib/response');

const router = express.Router();

const getCommands = require('../models/admin');

router.get('/admin', getCommands.getCommandData);

router.post('/admin_add', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin');
})


module.exports = router;