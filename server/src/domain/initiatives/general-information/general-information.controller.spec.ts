import { Test, TestingModule } from '@nestjs/testing';
import { GeneralInformationController } from './general-information.controller';
import { GeneralInformationService } from './general-information.service';

describe('GeneralInformationController', () => {
  let controller: GeneralInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralInformationController],
      providers: [GeneralInformationService],
    }).compile();

    controller = module.get<GeneralInformationController>(
      GeneralInformationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
