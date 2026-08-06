import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const hasConfig = !!import.meta.env.VITE_FIREBASE_DATABASE_URL;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "placeholder",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "placeholder.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://placeholder-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "placeholder",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "placeholder",
};

if (!hasConfig) {
  console.warn(
    "Firebase env vars missing. Set VITE_FIREBASE_* in .env (see .env.example) — you need a Realtime Database enabled on the project."
  );
}

// Realtime Database only — no Cloud Functions/backend needed, so the whole
// multiplayer layer runs from the static build.
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
