import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { SnackbarService } from '../../components/snackbar/service/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class HasAccessGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private snackService: SnackbarService
  ) { }

  private checkPermissions(permissions: string[]) {
    const user = this.authService.getUser();

    if (!permissions.length || user.isSuper) {
      return true;
    }

    const userAccessList = user.role.accessList;

    return userAccessList.filter(x => {
      return permissions.indexOf(x.keyName) > -1;
    }).length >= permissions.length;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permissions = (next.data.permissions as string[] || []);
    const pass = this.checkPermissions(permissions);

    if (!pass) {
      this.snackService.open({
        message: 'errors.no_access',
        duration: 5000
      });
    }

    return pass;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permissions = (next.data.permissions as string[] || []);
    const pass = this.checkPermissions(permissions);

    if (!pass) {
      this.snackService.open({
        message: 'errors.no_access',
        duration: 5000
      });
    }

    return pass;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
