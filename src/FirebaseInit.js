'use strict';

// [START imports]
const admin = require("firebase-admin");
// [END imports]
 
// [START initialize]
// Initialize the app with a service account, granting admin privileges
const serviceAccount = require("../service/happy-serviceKey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "//happy-d02bd.firebaseio.com/"
});
// [END initialize]

// Get a database reference to the TODO list database
const db = admin.database();

module.exports = db;
