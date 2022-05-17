const express = require('express');
const path = require('path');
const fs = require('fs');

const rootDir = path.dirname(require.main.filename);

const usr = path.join(
    rootDir,
    '..', 
    'data',
    'user-commands.json'
);

const sub = path.join(
    rootDir, 
    'data',
    'sub-commands.json'
);

const mod = path.join(
    rootDir, 
    'data',
    'mod-commands.json'
);

const router = express.Router();

usrData = JSON.stringify(usr);
console.log(usrData)

router.get('/', (req, res, next) => {
    res.render('commands', {
        pageTitle: 'Commands',
        userData: usrData
    });
});

module.exports = router;