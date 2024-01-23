import { Test, TestingModule } from '@nestjs/testing';
import { ClarisaCgiarEntityTypesController } from './clarisa-cgiar-entity-types.controller';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';

describe('ClarisaCgiarEntityTypesController', () => {
  let controller: ClarisaCgiarEntityTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClarisaCgiarEntityTypesController],
      providers: [ClarisaCgiarEntityTypesService],
    }).compile();

    controller = module.get<ClarisaCgiarEntityTypesController>(ClarisaCgiarEntityTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
