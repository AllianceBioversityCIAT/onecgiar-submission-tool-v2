import { Module, Res, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/config/orm.config';
import { InitiativesModule } from './domain/initiatives/initiatives.module';
import { APP_FILTER, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { MainRoutes } from './routes/main.routes';
import { LoggingInterceptor } from './domain/shared/Interceptors/logging.interceptor';
import { ResponseInterceptor } from './domain/shared/Interceptors/response.interceptor';
import { GlobalExceptions } from './domain/shared/error-management/global.exception';
import { AuthModule } from './domain/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    RouterModule.register(MainRoutes),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
    }),
    InitiativesModule,
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
export class AppModule {}
