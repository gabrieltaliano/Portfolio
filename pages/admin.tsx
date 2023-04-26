import React, { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function Admin() {
  const [user, setUser] = useState("none");

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOutUser = async () => {
    await signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("There was an error signing out", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center text-green-300">
      {!user ? (
        <>
          <div>Admin access required</div>
          <button onClick={googleSignIn}>SIGN IN</button>
        </>
      ) : (
        <>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      )}
    </div>
  );
}
