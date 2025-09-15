import { Controller, Get } from '@nestjs/common';
import { ClipService } from './clip.service';
import { FirestoreService } from 'src/firebase/firestore.service';

@Controller('clips')
export class ClipController {
  constructor(
    private readonly clipService: ClipService,
    private readonly firestoreService: FirestoreService
  ) {}

  @Get()
  async getClips(): Promise<any> {
    const clips = this.firestoreService.getAllDocuments('clips');
    return clips;
  }
}
