import { Routes } from '@nestjs/core';
import { AuthModule } from '../domain/auth/auth.module';
import { RolesModule } from '../domain/auth/roles/roles.module';
import { UsersModule } from '../domain/auth/users/users.module';

const children: Routes = [
  {
    path: 'role',
    module: RolesModule,
  },
  {
    path: 'user',
    module: UsersModule,
  },
];

export const authRoutes: Routes = [
  {
    path: 'auth',
    module: AuthModule,
    children: children,
  },
];
