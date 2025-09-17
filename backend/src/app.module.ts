import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipModule } from './clip/clip.module';

@Module({
  imports: [ClipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
