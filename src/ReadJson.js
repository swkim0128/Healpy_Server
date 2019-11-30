/* 
*   var data = fs.readFileSync(`./output/COCO_val2014_000000000459_keypoints.json`);
*   var jsonFile = JSON.parse(data);
*   pose_keypoints.push(jsonFile.people[0].pose_keypoints_2d);
*
*   data = fs.readFileSync(`./output/COCO_val2014_000000000474_keypoints.json`);
*   jsonFile = JSON.parse(data);
*   pose_keypoints.push(jsonFile.people[0].pose_keypoints_2d);
*    console.log(pose_keypoints[0][6]);
*/
'use strict';

const fs = require('fs');

let bodys = new Array();

function bodyPush(keypoints) {
    if(keypoints != null) {
        bodys.push({
            Nose : [keypoints[0], keypoints[1]],
            Neck : [keypoints[3], keypoints[4]],
            RShoulder : [keypoints[6], keypoints[7]],
            RElbow : [keypoints[9], keypoints[10]],
            RWrist : [keypoints[12], keypoints[13]],
            LShoulder : [keypoints[15], keypoints[16]],
            LElbow : [keypoints[18], keypoints[19]],
            LWrist : [keypoints[21], keypoints[22]],
            MidHip : [keypoints[24], keypoints[25]],
            RHip : [keypoints[27], keypoints[28]],
            RKnee : [keypoints[30], keypoints[31]],
            RAnkle : [keypoints[33], keypoints[34]],
            LHip : [keypoints[36], keypoints[37]],
            LKnee : [keypoints[39], keypoints[40]],
            LAnkle : [keypoints[42], keypoints[43]],
            REye : [keypoints[45], keypoints[46]],
            LEye : [keypoints[48], keypoints[49]],
            REar : [keypoints[51], keypoints[52]],
            LEar : [keypoints[54], keypoints[55]],
            LBigToe : [keypoints[57], keypoints[58]],
            LSmallToe : [keypoints[60], keypoints[61]],
            LHeel : [keypoints[63], keypoints[64]],
            RBigToe : [keypoints[66], keypoints[67]],
            RSmallToe : [keypoints[69], keypoints[70]],
            RHeel : [keypoints[72], keypoints[73]],
        });
    }
    else {
        bodys.push(null);
    }
}

function readJson(userInfo) {
    console.log('파일 읽기 시작');

    for(var i = 0; i < userInfo.count; i++) {
        const data = fs.readFileSync(`./public/output/UID${userInfo.uid}/${userInfo.imageName}_${i}_keypoints.json`);
        const jsonFile = JSON.parse(data);
        
        if(jsonFile.people.length == 0) {
            bodyPush(null);
        }
        else {
            bodyPush(jsonFile.people[0].pose_keypoints_2d);
        }
    }

    return bodys;

    // let data = fs.readFileSync(`./output/COCO_val2014_000000000459_keypoints.json`);
    // let jsonFile = JSON.parse(data);
    // bodyPush(jsonFile.people[0].pose_keypoints_2d);

    // data = fs.readFileSync(`./output/COCO_val2014_000000000474_keypoints.json`);
    // jsonFile = JSON.parse(data);
    // bodyPush(jsonFile.people[0].pose_keypoints_2d);

    // return bodys;
}


module.exports = readJson;
