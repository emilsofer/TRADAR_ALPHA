// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dbt6Q7YnH3KvWfbFp849zVMl2GLMUeI",
  authDomain: "tradar-e5d3d.firebaseapp.com",
  projectId: "tradar-e5d3d",
  storageBucket: "tradar-e5d3d.firebasestorage.app",
  messagingSenderId: "1095115615554",
  appId: "1:1095115615554:web:7f5f2b9dda4aa31fc42cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

export async function saveUserResponse(formData: any, result: any, clickedPlatform: string | null) {
  try {
    console.log("saveUserResponse called with clickedPlatform:", clickedPlatform);
    await addDoc(collection(db, "user_responses"), {
      timestamp: new Date().toISOString(),
      formData,
      result,
      clickedPlatform: clickedPlatform ?? "UNKNOWN"
    });
    console.log("נשמר בהצלחה בפיירסטור");
  } catch (e) {
    console.error("שגיאה בשמירה לפיירסטור:", e);
  }
}
