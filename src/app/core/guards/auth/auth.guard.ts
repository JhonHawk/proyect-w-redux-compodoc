import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { SnackbarService } from '../../components/snackbar/service/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackService: SnackbarService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const pass = this.authService.isLoggedIn();

    if (!pass) {
      this.router.navigate(['/login']);
    } else {
      const firstLogin = this.authService.getUser().firstLogin;

      if (firstLogin) {
        if (state.url !== '/settings/password-change') {
          this.router.navigate(['/settings/password-change']);
          this.snackService.open({
            message: 'errors.change_password',
            duration: 5000
          });
          return false;
        }
      }
    }

    return pass;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn();
  }
}
