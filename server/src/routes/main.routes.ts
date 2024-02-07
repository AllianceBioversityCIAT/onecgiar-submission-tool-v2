import { Routes } from '@nestjs/core';
import { EntityRoustes } from './initiatives.routes';
import { AuthModule } from '../domain/auth/auth.module';
import { ClarisaRoustes } from './clarisa.routes';
import { authRoutes } from './auth.routes';

export const MainRoutes: Routes = [
  {
    path: 'api',
    children: [...EntityRoustes, ...ClarisaRoustes],
  },
  ...authRoutes,
];
