import { Test, TestingModule } from '@nestjs/testing';
import { MeliaController } from './melia.controller';
import { MeliaService } from './melia.service';

describe('MeliaController', () => {
  let controller: MeliaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeliaController],
      providers: [MeliaService],
    }).compile();

    controller = module.get<MeliaController>(MeliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
