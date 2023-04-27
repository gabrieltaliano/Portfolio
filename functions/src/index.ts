import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const revalidate = functions.firestore.document("stack/{documentId}")
  .onWrite(() => {
    return fetch(`https://gabrieltaliano.dev/api/revalidate?secret=${functions.config().vercel.key}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) =>
        functions.logger.info("Revalidated:", json)
      )
      .catch((error) =>
        functions.logger.error("Error POST fetching vercel API:", error)
      );
  });
