import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { Entities } from './entities/entities.entity';
import { EntityService } from './entity.service';

describe('EntityService', () => {
  let service: EntityService;
  let repo: Repository<Entities>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntityService,
        {
          provide: getRepositoryToken(Entities),
          useClass: Repository,
        },
        {
          provide: DataSource,
          useValue: {
            transaction: jest.fn().mockImplementation((cb) =>
              cb({
                getRepository: jest.fn().mockReturnValue(repo),
              }),
            ),
          },
        },
      ],
    }).compile();

    service = module.get<EntityService>(EntityService);
    repo = module.get<Repository<Entities>>(getRepositoryToken(Entities));
  });

  it('should find entities', async () => {
    const result = [{ id: 1 }];
    const mockQueryBuilder = {
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue(result),
    };

    jest
      .spyOn(repo, 'createQueryBuilder')
      .mockImplementation(
        () => mockQueryBuilder as unknown as SelectQueryBuilder<Entities>,
      );

    const response = await service.findEntities(
      'initiatives',
      undefined,
      'INIT-01',
      1,
    );

    expect(response).toEqual({
      message: 'Success',
      status: 200,
      data: result,
    });
    expect(repo.createQueryBuilder).toHaveBeenCalledWith('entities');
    expect(mockQueryBuilder.leftJoinAndSelect).toHaveBeenCalledTimes(5);
    expect(mockQueryBuilder.where).toHaveBeenCalled();
    expect(mockQueryBuilder.getMany).toHaveBeenCalled();
  });
});
