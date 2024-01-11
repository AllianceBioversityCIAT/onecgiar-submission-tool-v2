import { Test, TestingModule } from '@nestjs/testing';
import { ContextController } from './context.controller';
import { ContextService } from './context.service';

describe('ContextController', () => {
  let controller: ContextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContextController],
      providers: [ContextService],
    }).compile();

    controller = module.get<ContextController>(ContextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
