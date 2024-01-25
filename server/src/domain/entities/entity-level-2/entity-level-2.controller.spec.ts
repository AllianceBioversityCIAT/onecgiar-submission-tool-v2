import { Test, TestingModule } from '@nestjs/testing';
import { EntityLevel2Controller } from './entity-level-2.controller';
import { EntityLevel2Service } from './entity-level-2.service';

describe('EntityLevel2Controller', () => {
  let controller: EntityLevel2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityLevel2Controller],
      providers: [EntityLevel2Service],
    }).compile();

    controller = module.get<EntityLevel2Controller>(EntityLevel2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
