import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
        const serviceAccount = require('../../keys/firebase-key.json');
        if (!admin.apps.length) {
          admin.initializeApp({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            credential: admin.credential.cert(serviceAccount),
          });
        }
        return admin.firestore();
      },
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {}
