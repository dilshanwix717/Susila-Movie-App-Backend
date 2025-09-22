// Susila Life
const susilaLifeDbAdmin = require("firebase-admin");
require('dotenv').config();

// Decode the Firebase Admin Key from base64 and parse the JSON
let firebaseAdminKey, firebaseContentProviderKey;
try {
  const firebaseAdminKeyBase64 = process.env.FIREBASE_ADMIN_KEY;
  const decodedAdminKey = Buffer.from(firebaseAdminKeyBase64, 'base64').toString('utf-8');
  firebaseAdminKey = JSON.parse(decodedAdminKey);

  const firebaseContentProviderKeyBase64 = process.env.FIREBASE_CONTENT_PROVIDER_KEY;
  const decodedContentProviderKey = Buffer.from(firebaseContentProviderKeyBase64, 'base64').toString('utf-8');
  firebaseContentProviderKey = JSON.parse(decodedContentProviderKey);

  console.log("Parsed Firebase keys successfully.");
} catch (error) {
  console.error("Error parsing Firebase keys:", error);
  process.exit(1); // Exit to prevent undefined behavior
}

const susilaLifeFirebaseApp = susilaLifeDbAdmin.initializeApp(
  {
    credential: susilaLifeDbAdmin.credential.cert(firebaseAdminKey),
    projectId: "susila-life-test",
  },
  "first-app"
);
const susilaLifeDB = susilaLifeFirebaseApp.firestore();

// Content Provider
const susilaLifeContentProviderDBAdmin = require("firebase-admin");

const susilaLifeContentProviderApp = susilaLifeContentProviderDBAdmin.initializeApp(
  {
    credential: susilaLifeContentProviderDBAdmin.credential.cert(firebaseContentProviderKey),
  },
  "Content-Provider-Test2"
);
const susilaLifeContentProviderDB = susilaLifeContentProviderApp.firestore();

module.exports = {
  // Mobile

  susilaLifeDB,
  susilaLifeFirebaseApp,
  susilaLifeDbAdmin,

  // CPP
  susilaLifeContentProviderDB,
  susilaLifeContentProviderApp,
  susilaLifeContentProviderDBAdmin,
};
