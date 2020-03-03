import { NavigationExtras } from '@angular/router';

export interface NavbarTitleOptions {
  text?: string;
  params?: { [key: string]: string };
  icon?: string;
  showBackButton?: boolean;
  backRoute?: string;
  backRouteParams?: NavigationExtras;
}
