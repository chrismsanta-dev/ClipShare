import { FirebaseModule } from './firebase/firebase.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipModule } from './clip/clip.module';
import { FirestoreService } from './firebase/firestore.service';

@Module({
  imports: [ClipModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService, FirestoreService],
})
export class AppModule {}
