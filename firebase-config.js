import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBQHMGVqZ03rRy4JPyH432ke_2uBw5h4SE",
  authDomain: "mile-stream-tracker.firebaseapp.com",
  databaseURL: "https://mile-stream-tracker-default-rtdb.firebaseio.com",
  projectId: "mile-stream-tracker",
  storageBucket: "mile-stream-tracker.firebasestorage.app",
  messagingSenderId: "450288596554",
  appId: "1:450288596554:web:d14563f9558e0b6506d8b3",
  measurementId: "G-RGME0SNTM2"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const TRACKER_PATH = "swimTracker/current";
export const TOTAL_MILES = 26;
