'use strict';

const fs = require('fs');

fs.unlink(__dirname + '/public/images/khuho.png', function(err) {
    if(err) {
        console.error(err);
    }

    console.log('File has been Deleted');
})