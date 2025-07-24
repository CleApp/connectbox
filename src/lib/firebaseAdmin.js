// lib/firebaseAdmin.js
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newlines
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL, // Optional, for Realtime Database
  });
}

const db = admin.firestore();
export { db, admin };