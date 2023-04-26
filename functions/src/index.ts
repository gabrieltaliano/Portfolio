import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const revalidate = functions.https.onRequest((request, response) => {
  functions.firestore.document("stack/").onWrite(async (doc) => {
    console.log(JSON.stringify(doc));
    const _params = {
      secret: functions.config().vercel.key,
    };

    return await fetch("https://gabrieltaliano.dev/api/revalidate", {
      method: "POST",
      body: JSON.stringify(_params),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    })
      .then((response) => response.json())
      .then((json) => response.send(json))
      .catch((error) => response.send(error));
  });
});
