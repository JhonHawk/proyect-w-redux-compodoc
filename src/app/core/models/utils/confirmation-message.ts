export interface ConfirmationMessageActions {
  onAccepted?: () => void;
  onCanceled?: () => void;
}

export interface ConfirmationMessageParams extends ConfirmationMessageActions {
  /** Confirmation title */
  title?: string;
  /** Confirmation body */
  body?: string;
  /** Confirmation title params for translate */
  titleParams?: { [key: string]: string };
  /** Confirmation body params for translate */
  bodyParams?: { [key: string]: string };
  /** Accept button text */
  acceptButtonText?: string;
  /** Show cancel button */
  cancelButton?: boolean;
  /** Cancel button text */
  cancelButtonText?: string;
}

