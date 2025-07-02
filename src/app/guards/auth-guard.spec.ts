import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { AuthGaurd } from './auth-guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGaurd;
  let router: Router;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [AuthGaurd]
    });

    guard = TestBed.inject(AuthGaurd);
    router = TestBed.inject(Router);

    route = {} as ActivatedRouteSnapshot;
    state = { url: '/protected' } as RouterStateSnapshot;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should allow activation if token exists', () => {
    localStorage.setItem('token', 'fake-token');
    const result = guard.canActivate(route, state);
    expect(result).toBeTrue();
  });

  it('should block activation and redirect if token is missing', () => {
    spyOn(router, 'navigate');
    localStorage.removeItem('token');

    const result = guard.canActivate(route, state);

    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
