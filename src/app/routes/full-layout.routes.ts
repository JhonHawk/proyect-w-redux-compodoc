import { Routes } from '@angular/router';
import { MODULES } from '../constants/modules';
// import { HasAccessGuard } from '../core/guards/has-access/has-access.guard';
import { NavbarTitleOptions } from '../core/models/utils/navbar-title';

const getPageTitle = (obj: { title: string, icon: string }): NavbarTitleOptions => {
  return {
    text: obj.title,
    icon: obj.icon,
  };
};

export const routes: Routes = [{
  path: 'home',
  // loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule),
  data: {
    title: getPageTitle(MODULES.HOME)
  }
},{
  path: 'security',
  // loadChildren: () => import('src/app/modules/security/security.module').then(m => m.SecurityModule),
  // canActivateChild: [HasAccessGuard],
  data: {
    permissions: [MODULES.SECURITY.key],
    title: getPageTitle(MODULES.SECURITY)
  }
}];
