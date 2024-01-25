import { Test, TestingModule } from '@nestjs/testing';
import { ClarisaCgiarSubEntityTypesService } from './clarisa-cgiar-sub-entity-types.service';

describe('ClarisaCgiarSubEntityTypesService', () => {
  let service: ClarisaCgiarSubEntityTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClarisaCgiarSubEntityTypesService],
    }).compile();

    service = module.get<ClarisaCgiarSubEntityTypesService>(ClarisaCgiarSubEntityTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
