import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../keys/firebase-admin-key.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
