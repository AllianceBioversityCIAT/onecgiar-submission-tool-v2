import { Module } from '@nestjs/common';
import { PeopleAndCultureService } from './people-and-culture.service';
import { PeopleAndCultureController } from './people-and-culture.controller';

@Module({
  controllers: [PeopleAndCultureController],
  providers: [PeopleAndCultureService],
})
export class PeopleAndCultureModule {}
