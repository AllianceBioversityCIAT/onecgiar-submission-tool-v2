import { Test, TestingModule } from '@nestjs/testing';
import { EntityLevel2Service } from './entity-level-2.service';

describe('EntityLevel2Service', () => {
  let service: EntityLevel2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityLevel2Service],
    }).compile();

    service = module.get<EntityLevel2Service>(EntityLevel2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
