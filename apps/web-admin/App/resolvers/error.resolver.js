import { has } from 'lodash';

const GENERAL_ERROR_MESSAGE = 'Something has gone wrong, please try again';
const GENERAL_ERROR_STATUS_THRESHOLD = 500;
const DEFAULT_MISSING_STATUS = 500;

export const UNAUTHORIZED_STATUSES = [403, 401];

export const generalizeError = error => ({ ...error, general: true });

export const getErrorStatus = error => {
  const hasResponseStatus = has(error, 'response.status');
  const hasStatus = has(error, 'status');

  return hasResponseStatus
    ? error.response.status
    : hasStatus
    ? error.status
    : DEFAULT_MISSING_STATUS;
};

export const getErrorMessage = error => {
  const status = getErrorStatus(error);
  const hasResponseMessage = has(error, 'response.data.message');

  if (error.general || (!hasResponseMessage && status >= GENERAL_ERROR_STATUS_THRESHOLD)) {
    return GENERAL_ERROR_MESSAGE;
  }

  return error.response.data.message;
};
