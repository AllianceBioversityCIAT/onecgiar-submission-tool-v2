import { Test, TestingModule } from '@nestjs/testing';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';

describe('ClarisaCgiarEntityTypesService', () => {
  let service: ClarisaCgiarEntityTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClarisaCgiarEntityTypesService],
    }).compile();

    service = module.get<ClarisaCgiarEntityTypesService>(ClarisaCgiarEntityTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
