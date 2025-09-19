import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firebase/firestore.service';
import { CreateClipDto } from 'src/clip/models/clip.dto';
import { Clip } from 'src/clip/models/clip.model';
import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';

@Injectable()
export class ClipSerice {
  constructor(private readonly firestoreService: FirestoreService) {}

  public async createClip(clipData: CreateClipDto, file: Express.Multer.File): Promise<Clip> {
    let image: string = '';

    if (file) {
      const fileName = `clips/${uuid()}-${file.originalname}`;
      const fileUpload = admin.storage().bucket().file(fileName);

      await fileUpload.save(file.buffer, {
        metadata: { contentType: file.mimetype },
      });

      const [url] = await fileUpload.getSignedUrl({
        action: 'read',
        expires: '03-01-2500',
      });

      image = url;
    }

    const newClip = {
      ...clipData,
      image,
      createdAt: new Date().toString(),
      comments: [],
      views: 0,
      votes: 0,
    };

    const docRef = await this.firestoreService.addDocument('clips', newClip);

    return { id: docRef.id, ...newClip };
  }
}
