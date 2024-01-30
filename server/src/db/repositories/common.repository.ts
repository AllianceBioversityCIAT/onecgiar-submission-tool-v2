import { DataSource } from 'typeorm';

export class CommonSearchRepository<T> {
  static findAll<T>(dataSource: DataSource, entity: Function): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager.getRepository(entity).find();
      return entities as Promise<T[]>;
    });
  }
}
