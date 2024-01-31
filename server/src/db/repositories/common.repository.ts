import { DataSource } from 'typeorm';

export class CommonSearchRepository<T> {
  static findAll<T>(dataSource: DataSource, entity: Function): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager.getRepository(entity).find();
      return entities as Promise<T[]>;
    });
  }

  static save<T>(
    dataSource: DataSource,
    entity: Function,
    data: T[] | T,
    reload: boolean = false,
  ): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager.getRepository(entity).save(data, { reload });
      return entities as Promise<T[]>;
    });
  }
}
