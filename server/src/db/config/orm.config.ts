import 'dotenv/config';
import { DataSourceOptions, DataSource } from 'typeorm';
import { env } from 'process';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USER_NAME,
  password: env.DB_USER_PASS,
  database: env.DB_NAME,
  entities: [],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  migrations: [`${__dirname}/../../db/migrations/**/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  metadataTableName: 'orm_metadata',
  extra: {
    namedPlaceholders: true,
  },
};

export const dataSource: DataSource = new DataSource(dataSourceOptions);
