import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalVariablesService } from '../../shared/services/global-variables.service';

export const Authenticated: CanActivateFn = (route, state) => {
  const varsSE = inject(GlobalVariablesService);
  const router = inject(Router);
  return varsSE.decodedUserData().isLogged || router.createUrlTree(['/about']);
};
