const functions = require("firebase-functions");
const admin = require("firebase-admin");
const config = require("./firebase-config.json");

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://proyecto-crossfit-default-rtdb.firebaseio.com/",
});
const runtimeOpts = {
  timeoutSeconds: 60,
  memory: "256MB",
};
/* eslint eol-last: "error" */
exports.crossfit = functions.runWith(runtimeOpts)
    .https.onRequest((req, res) => {
      if ( req.method == "GET" ) {
        const CardsPlanes = admin.database().ref("CardsPlanes");
        CardsPlanes.on("value", (snapshot) => {
          return res.status(200).json(snapshot.val());
        }, (errorObject) => {
          console.log("The read failed: " + errorObject.name);
        });
      }
    });
