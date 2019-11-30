'use strict';

const fs = require('fs');
const path = require('path');

function createFolder(filePath) {
    const uidFolder = path.resolve(filePath);

    if(!fs.existsSync(uidFolder)) {
        fs.mkdir(uidFolder, err => {
            if(err) {
                console.log(err);
                return false;
            }
            else {
                console.log('create new Dir');
                return true;
            }
        });
    }
}

module.exports = createFolder;
