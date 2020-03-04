
import { MatSnackBarRef } from '@angular/material/snack-bar/snack-bar-ref';
import { SnackbarTemplateComponent } from '../../components/snackbar/snackbar-template/snackbar-template.component';

export interface SnackbarOptions {
  /** Snackbar message */
  message: string;
  /** Snackbar message params for translate */
  messageParams?: { [key: string]: string };
  /** Snackbar duration in ms */
  duration?: number;
  /** Snackbar action text (button on the right) */
  actionText?: string;
  /** Dismiss snackbar on action click */
  dissmissOnActionClick?: boolean;
  /** Actions to perform after the snackbar close */
  onAction?: (snackbar?: MatSnackBarRef<SnackbarTemplateComponent>) => void;
  afterDismissed?: () => void;
}
