import { DataSource } from 'typeorm';

export class CommonRepository<T> {
  static findAll<T>(dataSource: DataSource, entity: Function): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager.getRepository(entity).find();
      return entities as Promise<T[]>;
    });
  }

  static findOne<T>(
    dataSource: DataSource,
    entity: Function,
    key: keyof T & string,
    id: number,
    select: (keyof T & string)[] = [],
  ): Promise<T> {
    return dataSource.transaction(async (manager) => {
      const resEntity = manager
        .getRepository(entity)
        .findOne({ where: { [key]: id }, select });
      return resEntity as Promise<T>;
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
