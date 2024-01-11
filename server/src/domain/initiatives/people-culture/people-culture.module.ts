import { Module } from '@nestjs/common';
import { PeopleCultureService } from './people-culture.service';
import { PeopleCultureController } from './people-culture.controller';

@Module({
  controllers: [PeopleCultureController],
  providers: [PeopleCultureService],
})
export class PeopleCultureModule {}
