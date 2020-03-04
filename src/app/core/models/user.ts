import { BaseModel } from './base';

export interface User extends BaseModel {
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /** User second last name */
  secondLastName?: string;
  /** User email */
  email?: string;
  /** User unique username */
  username?: string;
  /** User has first login (password restore performed) */
  firstLogin?: boolean;
  /** User role */
  role?: string;
  /** User role id */
  roleId?: number;
  /** User company */
  company?: string;
  /** User company id */
  companyId?: number;
  /** Is super user */
  isSuper?: boolean;

  companyName?: string;
}

export type Users = User[];
