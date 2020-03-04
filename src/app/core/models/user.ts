import { BaseModel } from './base';
import { Company } from './company';
import { Role } from './role';

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
  role?: Role;
  /** User role id */
  roleId?: number;
  /** User company */
  company?: Company;
  /** User company id */
  companyId?: number;
  /** Is super user */
  isSuper?: boolean;

  companyName?: string;
}

export type Users = User[];
