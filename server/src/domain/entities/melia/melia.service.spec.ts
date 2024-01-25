import { Test, TestingModule } from '@nestjs/testing';
import { MeliaService } from './melia.service';

describe('MeliaService', () => {
  let service: MeliaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeliaService],
    }).compile();

    service = module.get<MeliaService>(MeliaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
