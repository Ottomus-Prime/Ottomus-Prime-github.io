const fs = require('fs');

exports.getCommandData = (req, res, next) => {
    fs.readFile('./data/user-commands.json', (err, usrContent) => {
        if(err) {
            return console.log(err);
        } else {
            userData = JSON.parse(usrContent);
            fs.readFile('./data/sub-commands.json', (err, subContent) => {
                if(err) {
                    return console.log(err);
                } else {
                    subData = JSON.parse(subContent);
                    fs.readFile('./data/mod-commands.json', (err, modContent) => {
                        if (err) {
                            return console.log(err);
                        } else {
                            modData = JSON.parse(modContent);
                            res.render('admin', {
                                pageTitle: "Otto's Chat Commands (admin)",
                                userCommands: userData,
                                subCommands: subData,
                                modCommands: modData
                            });
                        };
                    });
                };
            });
        };
    });
};