import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const data = JSON.parse(sessionStorage.getItem('user_token') ?? '{}');
  return !!data.token;
};
