import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FirestoreService } from 'src/firebase/firestore.service';
import { CreateClipDto } from 'src/clip/models/clip.dto';
import { Clip } from 'src/clip/models/clip.model';
import { ClipSerice } from './clip.service';

@Controller('clips')
export class ClipController {
  constructor(
    private readonly firestoreService: FirestoreService,
    private clipService: ClipSerice
  ) {}

  @Get()
  getClips(): Promise<Clip[]> {
    return this.firestoreService.getAllDocuments<Clip>('clips');
  }

  @Get(':id')
  getClip(@Param('id') id: string): Promise<Clip> {
    return this.firestoreService.getDocument<Clip>('clips', id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createClip(@Body() body: CreateClipDto, @UploadedFile() file: Express.Multer.File): Promise<Clip> {
    if (!body) throw new Error();

    return this.clipService.createClip(body, file);
  }

  @Delete(':id')
  deleteClip(@Param('id') id: string): Promise<void> {
    return this.firestoreService.deleteDocument('clips', id);
  }
}
