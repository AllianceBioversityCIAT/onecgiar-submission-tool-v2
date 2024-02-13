import { DataSource, FindOptionsWhere } from 'typeorm';

export class CommonRepository {
  static findAll<T>(dataSource: DataSource, entity: new () => T): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager.getRepository(entity).find();
      return entities as Promise<T[]>;
    });
  }

  static findOne<T>(
    dataSource: DataSource,
    entity: new () => T,
    key: keyof T & string,
    id: number,
    select: (keyof T & string)[] = [],
  ): Promise<T> {
    return dataSource.transaction(async (manager) => {
      const resEntity = manager
        .getRepository(entity)
        .findOne({ where: { [key]: id } as FindOptionsWhere<T>, select });
      return resEntity as Promise<T>;
    });
  }

  static save<T>(
    dataSource: DataSource,
    entity: new () => T,
    data: T[] | T,
    reload: boolean = false,
  ): Promise<T[]> {
    return dataSource.transaction(async (manager) => {
      const entities = manager
        .getRepository(entity)
        .save(data as T, { reload });
      return entities as Promise<T[]>;
    });
  }
}
