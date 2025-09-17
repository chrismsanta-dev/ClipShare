import { Module } from '@nestjs/common';
import { ClipController } from './clip.controller';
import { FirestoreService } from 'src/firebase/firestore.service';
import { ClipSerice } from './clip.service';

@Module({
  imports: [],
  controllers: [ClipController],
  providers: [FirestoreService, ClipSerice],
})
export class ClipModule {}
