import * as admin from 'firebase-admin';
import * as serviceAccount from '../../keys/firebase-admin-key.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: 'your-project-id.appspot.com',
});

export const firestore = admin.firestore();
export const storage = admin.storage().bucket();
