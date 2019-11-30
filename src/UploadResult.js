"use strict";

const db = require("./FirebaseInit");
const Exercise = require("./Exercise");
const ref = db.ref("/");
const deleteFile = require("./FileDelete");

/**
 * API 1) Add a TODO Item with the following data
 */
// [START API 1]
async function uploadResult(userInfo) {
  let result = await Exercise(userInfo);

  console.log(result);

  // Add a new todo item
  var itemsRef = ref.child(`healpy/${userInfo.uid}/${userInfo.date}`);

  if (userInfo.exerciseName == "PushUp") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RElbowAngle,
      leftAngle: result.LElbowAngle
    });
  } else if (userInfo.exerciseName == "PullUp") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RElbowAngle,
      leftAngle: result.LElbowAngle
    });
  } else if (userInfo.exerciseName == "CullDumbbell") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RElbowAngle,
      leftAngle: result.LElbowAngle
    });
  } else if (userInfo.exerciseName == "Lunge") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RKneeAngle,
      leftAngle: result.LKneeAngle
    });
  } else if (userInfo.exerciseName == "Sqaurt") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RKneeAngle,
      leftAngle: result.LKneeAngle
    });
  } else if (userInfo.exerciseName == "Dips") {
    await itemsRef.set({
      exercise: userInfo.exerciseName,
      maxErrorImage: `${userInfo.imageName}_${result.maxErrorNum}.jpg`,
      errorRange: result.errorRange,
      rightAngle: result.RKneeAngle,
      leftAngle: result.LKneeAngle
    });
  }

  deleteFile(userInfo);
}

module.exports = uploadResult;
