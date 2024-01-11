import { Test, TestingModule } from '@nestjs/testing';
import { PeopleCultureController } from './people-culture.controller';
import { PeopleCultureService } from './people-culture.service';

describe('PeopleCultureController', () => {
  let controller: PeopleCultureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleCultureController],
      providers: [PeopleCultureService],
    }).compile();

    controller = module.get<PeopleCultureController>(PeopleCultureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
