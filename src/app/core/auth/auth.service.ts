import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APP } from '../../constants/app';
import { AccessPermissionEnum } from '../../enums/access.enums';
import { JwtToken } from '../models/token';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionName = `${APP.NAME}-session`;
  private tokenName = `${APP.NAME}-token`;
  userChange = new BehaviorSubject<User>(this.getUser());

  constructor() { }

  updateUser(value: User) {
    this.userChange.next(value);
  }

  /** Get user from local storage */
  getUser() {
    const value = localStorage.getItem(this.sessionName);
    return value ? JSON.parse(value) as User : null;
  }

  /** Save user into local storage */
  setUser(value: User) {
    localStorage.setItem(this.sessionName, JSON.stringify(value));
    this.updateUser(value);
  }

  /** Get the user role */
  getUserRole() {
    const user = this.getUser();

    if (user) {
      const role = user.role;
      return role;
    }

    return null;
  }


  /** Get token from local storage */
  getToken() {
    const value = localStorage.getItem(this.tokenName);
    return value ? JSON.parse(value) as JwtToken : null;
  }

  /** Get bearer token */
  getBearerToken() {
    return 'Bearer ' + this.getToken().key;
  }

  /** Set token into local storage */
  setToken(value: JwtToken) {
    localStorage.setItem(this.tokenName, JSON.stringify(value));
  }

  /** Set user and token into local storage */
  setUserAndToken(data: { user: User, token: JwtToken }) {
    this.setUser(data.user);
    this.setToken(data.token);
  }

  /** Remove user and token from local storage */
  destroySession() {
    localStorage.removeItem(this.sessionName);
    localStorage.removeItem(this.tokenName);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  checkWritePermission(user: User, permissionKeys: string[] = []) {
    // let hasPermission = true;

    // if (!permissionKeys || !permissionKeys.length || permissionKeys.every(p => p === '')) {
    //   return true;
    // }

    // if (user && user.role && user.role.accessList) {
    //   hasPermission = permissionKeys.every(p =>
    //     p === '' || user.role.accessList.find(a =>
    //       a.keyName === p && a.permission === AccessPermissionEnum.WRITE
    //     ) !== undefined
    //   );
    // }

    // return hasPermission;
  }
}
