import { Routes } from '@nestjs/core';
import { EntityRoustes } from './initiatives.routes';
import { AuthModule } from '../domain/auth/auth.module';

export const MainRoutes: Routes = [
  {
    path: 'api',
    children: [...EntityRoustes],
  },
  {
    path: 'auth',
    module: AuthModule,
  },
];
