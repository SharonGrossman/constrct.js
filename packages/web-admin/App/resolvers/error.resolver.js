import { has } from 'lodash';

const GENERAL_ERROR_MESSAGE = 'Something has gone wrong, please try again';
const GENERAL_ERROR_STATUS_THRESHOLD = 500;
const DEFAULT_MISSING_STATUS = 500;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

export const generalizeError = ({ error }) => ({ ...error, general: true });

const extractStatusCode = error => {
  const hasResponseStatus = has(error, 'response.status');
  const hasStatus = has(error, 'status');

  return hasResponseStatus
    ? error.response.status
    : hasStatus
    ? error.status
    : DEFAULT_MISSING_STATUS;
};

export const resolveError = ({ error }) => {
  const status = extractStatusCode(error);
  const hasResponseMessage = has(error, 'response.data.message');

  if (status === UNAUTHORIZED || FORBIDDEN) {
    return GENERAL_ERROR_MESSAGE;
  }

  if (error.general || (!hasResponseMessage && status >= GENERAL_ERROR_STATUS_THRESHOLD)) {
    return GENERAL_ERROR_MESSAGE;
  }

  return error.response.data.message;
};
