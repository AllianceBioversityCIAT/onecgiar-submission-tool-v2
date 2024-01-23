import { Test, TestingModule } from '@nestjs/testing';
import { PeopleAndCultureController } from './people-and-culture.controller';
import { PeopleAndCultureService } from './people-and-culture.service';

describe('PeopleAndCultureController', () => {
  let controller: PeopleAndCultureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleAndCultureController],
      providers: [PeopleAndCultureService],
    }).compile();

    controller = module.get<PeopleAndCultureController>(PeopleAndCultureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
