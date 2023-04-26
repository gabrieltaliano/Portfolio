import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin";

initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
  functions.firestore.document("stack/").onWrite(() => {
    const _params = {
      secret: functions.config().vercel.key,
    };

    fetch("https://<your-site.com>/api/revalidate", {
      method: "POST",
      body: JSON.stringify(_params),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => response.send(error));
  });
});
