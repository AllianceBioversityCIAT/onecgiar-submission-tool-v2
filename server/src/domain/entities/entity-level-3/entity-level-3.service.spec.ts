import { Test, TestingModule } from '@nestjs/testing';
import { EntityLevel3Service } from './entity-level-3.service';

describe('EntityLevel3Service', () => {
  let service: EntityLevel3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityLevel3Service],
    }).compile();

    service = module.get<EntityLevel3Service>(EntityLevel3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
