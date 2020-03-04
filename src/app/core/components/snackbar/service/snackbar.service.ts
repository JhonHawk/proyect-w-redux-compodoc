import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarOptions } from '../../../models/utils/snackbar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackbarSubject: Subject<SnackbarOptions>;

  constructor() {
    this.snackbarSubject = new Subject();
  }

  open(data: SnackbarOptions) {
    this.snackbarSubject.next(data);
  }
}
