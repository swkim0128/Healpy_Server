"use strict";
const db = require("./src/FirebaseInit");
const ref = db.ref("/URL");
const async = require("async");
const createFolder = require("./FolderCreate");
const downloadImage = require("./src/DownloadImages");
const nodeCmd = require("child_process");
const uploadResult = require("./src/UploadResult");

const timeout = ms => new Promise(res => setTimeout(res, ms));

ref.on("child_changed", async function(snapshot) {
  let userInfo = snapshot.val();

  const imageFolder = __dirname + `/public/images/UID${userInfo.uid}`;
  const outputFolder = __dirname + `/public/output/UID${userInfo.uid}`;
  await createFolder(imageFolder);
  await createFolder(outputFolder);

  const bucketName = "gs://happy-d02bd.appspot.com";

  async.series(
    [
      async function(callback) {
        console.log("download start");
        await timeout(5000);
        await downloadImage(bucketName, userInfo);
      },
      async function(callback) {
        console.log("openpose start");

        const cmd = `bin\\OpenPoseDemo.exe --image_dir public\\images\\UID${
          userInfo.uid
        } --write_json public\\output\\UID${
          userInfo.uid
        } --display 0 --render_pose 0`;

        await nodeCmd.exec(cmd, (error, data, stderr) => {
          if (error !== null) {
            console.error("exec error:", error);
          }
          console.log(data);
          console.error(stderr);
        });
      },
      async function(callback) {
        console.log("upload start");
        await timeout(120000);
        await uploadResult(userInfo);
      }
    ],
    (err, result) => {
      if (err) {
        console.error(err);
      }
      console.log(result);
    }
  );
});
