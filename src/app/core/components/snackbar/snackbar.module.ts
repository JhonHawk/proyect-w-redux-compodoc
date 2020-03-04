import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarTemplateComponent } from './snackbar-template/snackbar-template.component';



@NgModule({
  declarations: [SnackbarComponent, SnackbarTemplateComponent],
  imports: [
    CommonModule
  ]
})
export class SnackbarModule { }
