import { Test, TestingModule } from '@nestjs/testing';
import { EntityLevel3Controller } from './entity-level-3.controller';
import { EntityLevel3Service } from './entity-level-3.service';

describe('EntityLevel3Controller', () => {
  let controller: EntityLevel3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityLevel3Controller],
      providers: [EntityLevel3Service],
    }).compile();

    controller = module.get<EntityLevel3Controller>(EntityLevel3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
