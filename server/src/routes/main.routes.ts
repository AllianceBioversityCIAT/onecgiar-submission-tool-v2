import { Routes } from '@nestjs/core';
import { InitiativesRoustes } from './initiatives.routes';

export const MainRoutes: Routes = [
  {
    path: 'api',
    children: [...InitiativesRoustes],
  },
];
