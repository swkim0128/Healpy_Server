"use strict";

const jsonfile = require("./ReadJson");
const Angle = require("./Angle");

let CullDumbbell = {
  RElbowAngle: 30,
  LElbowAngle: 30
};

let Dips = {
  RElbowAngle: 60,
  LElbowAngle: 60
};

let PushUp = {
  RElbowAngle: 60,
  LElbowAngle: 60
};

let PullUp = {
  RElbowAngle: 70,
  LElbowAngle: 70
};

let Squat = {
  RKneeAngle: 70,
  LKneeAngle: 70
};

let Lunge = {
  RKneeAngle: 90,
  LKneeAngle: 90
};

let bodys = new Object();

let errorRange = {
  RShoulderAngle: [],
  LShoulderAngle: [],
  RElbowAngle: [],
  LElbowAngle: [],
  RHipAngle: [],
  LHipAngle: [],
  RKneeAngle: [],
  LKneeAngle: []
};

let sum = {
  RShoulderAngle: 0,
  LShoulderAngle: 0,
  RElbowAngle: 0,
  LElbowAngle: 0,
  RHipAngle: 0,
  LHipAngle: 0,
  RKneeAngle: 0,
  LKneeAngle: 0,
  RShoulderAngleErrorRange: 0,
  LShoulderAngleErrorRange: 0,
  RElbowAngleErrorRange: 0,
  LElbowAngleErrorRange: 0,
  RHipAngleErrorRange: 0,
  LHipAngleErrorRange: 0,
  RKneeAngleErrorRange: 0,
  LKneeAngleErrorRange: 0
};

let average = {
  RShoulderAngle: 0,
  LShoulderAngle: 0,
  RElbowAngle: 0,
  LElbowAngle: 0,
  RHipAngle: 0,
  LHipAngle: 0,
  RKneeAngle: 0,
  LKneeAngle: 0,
  RShoulderAngleErrorRange: 0,
  LShoulderAngleErrorRange: 0,
  RElbowAngleErrorRange: 0,
  LElbowAngleErrorRange: 0,
  RHipAngleErrorRange: 0,
  LHipAngleErrorRange: 0,
  RKneeAngleErrorRange: 0,
  LKneeAngleErrorRange: 0
};

let result = new Object();

function getBodysAngle(userInfo) {
  bodys = jsonfile(userInfo);

  for (let key in bodys) {
    if (bodys[key] != null) {
      bodys[key].RShoulderAngle = function() {
        let x1 = this.RHip[0] - this.RShoulder[0];
        let y1 = this.RHip[1] - this.RShoulder[1];
        let x2 = this.RWrist[0] - this.RShoulder[0];
        let y2 = this.RWrist[1] - this.RShoulder[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].LShoulderAngle = function() {
        let x1 = this.LHip[0] - this.LShoulder[0];
        let y1 = this.LHip[1] - this.LShoulder[1];
        let x2 = this.LWrist[0] - this.LShoulder[0];
        let y2 = this.LWrist[1] - this.LShoulder[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].RElbowAngle = function() {
        let x1 = this.RShoulder[0] - this.RElbow[0];
        let y1 = this.RShoulder[1] - this.RElbow[1];
        let x2 = this.RWrist[0] - this.RElbow[0];
        let y2 = this.RWrist[1] - this.RElbow[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].LElbowAngle = function() {
        let x1 = this.LShoulder[0] - this.LElbow[0];
        let y1 = this.LShoulder[1] - this.LElbow[1];
        let x2 = this.LWrist[0] - this.LElbow[0];
        let y2 = this.LWrist[1] - this.LElbow[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].RHipAngle = function() {
        let x1 = this.RShoulder[0] - this.RHip[0];
        let y1 = this.RShoulder[1] - this.RHip[1];
        let x2 = this.RKnee[0] - this.RHip[0];
        let y2 = this.RKnee[1] - this.RHip[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].LHipAngle = function() {
        let x1 = this.LHip[0] - this.LHip[0];
        let y1 = this.LHip[1] - this.LHip[1];
        let x2 = this.LKnee[0] - this.LHip[0];
        let y2 = this.LKnee[1] - this.LHip[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].RKneeAngle = function() {
        let x1 = this.RHip[0] - this.RKnee[0];
        let y1 = this.RHip[1] - this.RKnee[1];
        let x2 = this.RAnkle[0] - this.RKnee[0];
        let y2 = this.RAnkle[1] - this.RKnee[1];

        return Angle(x1, y1, x2, y2);
      };

      bodys[key].LKneeAngle = function() {
        let x1 = this.LHip[0] - this.LKnee[0];
        let y1 = this.LHip[1] - this.LKnee[1];
        let x2 = this.LAnkle[0] - this.LKnee[0];
        let y2 = this.LAnkle[1] - this.LKnee[1];

        return Angle(x1, y1, x2, y2);
      };
    }
  }

  return bodys;
}

function getErrorRange(bodyAngle, baseAngle) {
  return (Math.abs(bodyAngle - baseAngle) / baseAngle) * 100;
}

function getAverage() {
  let num = 0;

  for (let i in bodys) {
    if (bodys[i] != null) {
      sum.RShoulderAngle += bodys[i].RShoulderAngle();
      sum.LShoulderAngle += bodys[i].LShoulderAngle();
      sum.RElbowAngle += bodys[i].RElbowAngle();
      sum.LElbowAngle += bodys[i].LElbowAngle();
      sum.LHipAngle += bodys[i].LHipAngle();
      sum.RHipAngle += bodys[i].RHipAngle();
      sum.RKneeAngle += bodys[i].RKneeAngle();
      sum.LKneeAngle += bodys[i].LKneeAngle();

      num++;
    }
  }

  average.RElbowAngle = sum.RElbowAngle / num;
  average.LElbowAngle = sum.LElbowAngle / num;
  average.RShoulderAngle = sum.RShoulderAngle / num;
  average.LShoulderAngle = sum.LShoulderAngle / num;
  average.RHipAngle = sum.RHipAngle / num;
  average.LHipAngle = sum.LHipAngle / num;
  average.RKneeAngle = sum.RKneeAngle / num;
  average.LKneeAngle = sum.LKneeAngle / num;
}

function getErrorAverage(exercise) {
  let num = 0;

  for (let i in bodys) {
    if (bodys[i] != null) {
      switch (exercise) {
        case "cullDumbbell":
        case "dips":
        case "pushUp":
        case "pullUp":
          sum.RElbowAngleErrorRange += errorRange.RElbowAngle[i];
          sum.LElbowAngleErrorRange += errorRange.LElbowAngle[i];
          break;
        case "squat":
        case "lunge":
          sum.RKneeAngleErrorRange += errorRange.RKneeAngle[i];
          sum.LKneeAngleErrorRange += errorRange.LKneeAngle[i];
          break;
      }

      num++;
    }
  }

  average.RElbowAngleErrorRange = sum.RElbowAngleErrorRange / num;
  average.LElbowAngleErrorRange = sum.LElbowAngleErrorRange / num;
  average.RShoulderAngleErrorRange = sum.RShoulderAngleErrorRange / num;
  average.LShoulderAngleErrorRange = sum.LShoulderAngleErrorRange / num;
  average.RKneeAngleErrorRange = sum.RKneeAngleErrorRange / num;
  average.LKneeAngleErrorRange = sum.LKneeAngleErrorRange / num;
  average.RHipAngleErrorRange = sum.RHipAngleErrorRange / num;
  average.LHipAngleErrorRange = sum.LHipAngleErrorRange / num;
}

function findHighErrorValue(array) {
  console.log(array);
  let maxValue = array.slice(0).sort(function(a, b) {
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    } else {
      return a > b;
    }
  })[0];

  console.log(array);
  return array.indexOf(maxValue) > 4 ? 3 : array.indexOf(maxValue);
}

let Exercise = new Object();

Exercise.cullDumbbell = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RElbowAngle[i] = getErrorRange(
        bodys[i].RElbowAngle(),
        CullDumbbell.RElbowAngle
      );
      errorRange.LElbowAngle[i] = getErrorRnage(
        bodys[i].LElbowAngle(),
        CullDumbbell.LElbowAngle
      );
    }
  }

  let RElbowMaxError = findHighErrorValue(errorRange.RElbowAngle);
  let LElbowMaxError = findHighErrorValue(errorRange.LElbowAngle);

  getAverage();
  getErrorAverage("cullDumbbell");

  result.errorRange =
    (average.RElbowAngleErrorRange + average.LElbowAngleErrorRange) / 2;
  result.RElbowAngle = average.RElbowAngle;
  result.LElbowAngle = average.LElbowAngle;
  result.maxErrorNum =
    RElbowMaxError == LElbowMaxError ? RElbowMaxError : LElbowMaxError;
};

Exercise.dips = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RElbowAngle[i] = getErrorRange(
        bodys[i].RElbowAngle(),
        Dips.RElbowAngle
      );
      errorRange.LElbowAngle[i] = getErrorRange(
        bodys[i].LElbowAngle(),
        Dips.LElbowAngle
      );
    }
  }

  let RElbowMaxError = findHighErrorValue(errorRange.RElbowAngle);
  let LElbowMaxError = findHighErrorValue(errorRange.LElbowAngle);

  getAverage();
  getErrorAverage("dips");

  result.errorRange =
    (average.RElbowAngleErrorRange + average.LElbowAngleErrorRange) / 2;
  result.RElbowAngle = average.RElbowAngle;
  result.LElbowAngle = average.LElbowAngle;
  result.maxErrorNum =
    RElbowMaxError == LElbowMaxError ? RElbowMaxError : LElbowMaxError;
};

Exercise.pushUp = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RElbowAngle[i] = getErrorRange(
        bodys[i].RElbowAngle(),
        PushUp.RElbowAngle
      );
      errorRange.LElbowAngle[i] = getErrorRange(
        bodys[i].LElbowAngle(),
        PushUp.LElbowAngle
      );
    }
  }

  let RElbowMaxError = findHighErrorValue(errorRange.RElbowAngle);
  let LElbowMaxError = findHighErrorValue(errorRange.LElbowAngle);
  console.log(RElbowMaxError);
  console.log(LElbowMaxError);

  getAverage();
  getErrorAverage("pushUp");

  result.errorRange =
    (average.RElbowAngleErrorRange + average.LElbowAngleErrorRange) / 2;
  result.RElbowAngle = average.RElbowAngle;
  result.LElbowAngle = average.LElbowAngle;
  result.maxErrorNum =
    RElbowMaxError == LElbowMaxError ? RElbowMaxError : LElbowMaxError;
};

Exercise.pullUp = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RElbowAngle[i] = getErrorRange(
        bodys[i].RElbowAngle(),
        PullUp.RElbowAngle
      );
      errorRange.LElbowAngle[i] = getErrorRange(
        bodys[i].LElbowAngle(),
        PullUp.LElbowAngle
      );
    }
  }

  let RElbowMaxError = findHighErrorValue(errorRange.RElbowAngle);
  let LElbowMaxError = findHighErrorValue(errorRange.LElbowAngle);

  getAverage();
  getErrorAverage("pullUp");

  result.errorRange =
    (average.RElbowAngleErrorRange + average.LElbowAngleErrorRange) / 2;
  result.RElbowAngle = average.RElbowAngle;
  result.LElbowAngle = average.LElbowAngle;
  result.maxErrorNum =
    RElbowMaxError == LElbowMaxError ? RElbowMaxError : LElbowMaxError;
};

Exercise.squat = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RKneeAngle[i] = getErrorRange(
        bodys[i].RKneeAngle(),
        Squat.RKneeAngle
      );
      errorRange.LKneeAngle[i] = getErrorRnage(
        bodys[i].LKneeAngle(),
        Squat.LKneeAngle
      );
    }
  }

  let RKneeMaxError = findHighErrorValue(errorRange.RKneeAngle);
  let LKneeMaxError = findHighErrorValue(errorRange.LKneeAngle);

  getAverage();
  getErrorAverage("squat");

  result.errorRange =
    (average.RKneeAngleErrorRange + average.LKneeAngleErrorRange) / 2;
  result.RElbowAngle = average.RKneeAngle;
  result.LElbowAngle = average.LKneeAngle;
  result.maxErrorNum =
    RKneeMaxError == LKneeMaxError ? RKneeMaxError : LKneeMaxError;
};

Exercise.lunge = function() {
  for (let i in bodys) {
    if (bodys[i] != null) {
      errorRange.RKneeAngle[i] = getErrorRange(
        bodys[i].RKneeAngle(),
        Lunge.RKneeAngle
      );
      errorRange.LKneeAngle[i] = getErrorRange(
        bodys[i].LKneeAngle(),
        Lunge.LKneeAngle
      );
    }
  }

  let RKneeMaxError = findHighErrorValue(errorRange.RKneeAngle);
  let LKneeMaxError = findHighErrorValue(errorRange.LKneeAngle);

  getAverage();
  getErrorAverage("lunge");

  result.errorRange =
    (average.RKneeAngleErrorRange + average.LKneeAngleErrorRange) / 2;
  result.RKneeAngle = average.RKneeAngle;
  result.LKneeAngle = average.LKneeAngle;
  result.maxErrorNum =
    RKneeMaxError == LKneeMaxError ? RKneeMaxError : LKneeMaxError;
};

let analyseExercise = function(userInfo) {
  bodys = getBodysAngle(userInfo);

  if (userInfo.exerciseName == "CullDumbbell") {
    Exercise.cullDumbbell();
  } else if (userInfo.exerciseName == "Dips") {
    Exercise.dips();
  } else if (userInfo.exerciseName == "PushUp") {
    Exercise.pushUp();
  } else if (userInfo.exerciseName == "PullUp") {
    Exercise.pullUp();
  } else if (userInfo.exerciseName == "Squart") {
    Exercise.squat();
  } else if (userInfo.exerciseName == "Lunge") {
    Exercise.lunge();
  }

  return result;
};

module.exports = analyseExercise;
