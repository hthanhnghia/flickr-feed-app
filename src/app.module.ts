import { Module, HttpModule } from '@nestjs/common';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';

@Module({
  imports: [HttpModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class AppModule {}
