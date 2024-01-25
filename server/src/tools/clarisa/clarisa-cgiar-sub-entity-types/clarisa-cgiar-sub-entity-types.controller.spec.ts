import { Test, TestingModule } from '@nestjs/testing';
import { ClarisaCgiarSubEntityTypesController } from './clarisa-cgiar-sub-entity-types.controller';
import { ClarisaCgiarSubEntityTypesService } from './clarisa-cgiar-sub-entity-types.service';

describe('ClarisaCgiarSubEntityTypesController', () => {
  let controller: ClarisaCgiarSubEntityTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClarisaCgiarSubEntityTypesController],
      providers: [ClarisaCgiarSubEntityTypesService],
    }).compile();

    controller = module.get<ClarisaCgiarSubEntityTypesController>(ClarisaCgiarSubEntityTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
