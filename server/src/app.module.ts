import { CronJobModule } from './tools/cron-job/cron-job.module';
import { ClarisaModule } from './tools/clarisa/clarisa.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/config/orm.config';
import { EntityModule } from './domain/entities/entity.module';
import { APP_FILTER, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { MainRoutes } from './routes/main.routes';
import { LoggingInterceptor } from './domain/shared/Interceptors/logging.interceptor';
import { ResponseInterceptor } from './domain/shared/Interceptors/response.interceptor';
import { GlobalExceptions } from './domain/shared/error-management/global.exception';
import { AuthModule } from './domain/auth/auth.module';
import { JwtMiddleware } from './domain/shared/middlewares/jwr.middleware';

@Module({
  imports: [
    CronJobModule,
    ClarisaModule,
    RouterModule.register(MainRoutes),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
    }),
    EntityModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptions,
    },
  ],
})
export class AppModule implements NestModule {
  //TODO: Implement when the user tables already exist.
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware); /*.exclude({
      path: 'auth/aws',
      method: RequestMethod.POST,
    });
    .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })*/
  }
}
