import { Module } from '@nestjs/common';
import { ClipService } from './clip.service';
import { ClipController } from './clip.controller';
import { FirestoreService } from 'src/firebase/firestore.service';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [ClipController],
  providers: [ClipService, FirestoreService],
})
export class ClipModule {}
