import { Routes } from '@nestjs/core';
import { InitiativesRoustes } from './initiatives.routes';
import { AuthModule } from '../domain/auth/auth.module';

export const MainRoutes: Routes = [
  {
    path: 'api',
    children: [...InitiativesRoustes],
  },
  {
    path: 'auth',
    module: AuthModule,
  },
];
