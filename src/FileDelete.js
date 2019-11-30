"use strict";

const fs = require("fs");

function deleteFile(userInfo) {
  for (let i = 0; i < userInfo.count; i++) {
    fs.unlink(
      `./public/images/UID${userInfo.uid}/${userInfo.imageName}_${i}.jpg`,
      function(err) {
        if (err) {
          console.error(err);
        }
      }
    );

    fs.unlink(
      `./public/output/UID${userInfo.uid}/${
        userInfo.imageName
      }_${i}_keypoints.json`,
      function(err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }
}

module.exports = deleteFile;
