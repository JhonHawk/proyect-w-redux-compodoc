import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('src/app/core/layout/empty-layout/empty-layout.module').then(m => m.EmptyLayoutModule),
  canActivateChild: [NoAuthGuard]
}, {
  path: '',
  loadChildren: () => import('src/app/core/layout/full-layout/full-layout.module').then(m => m.FullLayoutModule),
  canActivateChild: [AuthGuard]
}, {
  path: '*',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
