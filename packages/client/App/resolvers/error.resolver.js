import { getTokenFromLocalStorage } from './localStorage.resolver';

const GENERAL_ERROR_MESSAGE = 'Something has gone wrong, please try again';

const extractStatusCode = error => {
  let status;

  if (error.response) {
    const {
      response: { status: responseStatus }
    } = error;

    status = responseStatus;
  } else if (error.status) {
    const { status: responseStatus } = error;

    status = responseStatus;
  }

  return status || 500;
};

const extractErrorMessage = ({ error }) => {
  if (error.general || !error.response) {
    return GENERAL_ERROR_MESSAGE;
  }

  return error.response.data.message;
};

export const resolveError = ({ error }) => {
  return extractErrorMessage({ error });
};

export const resolveAuthError = ({ error, token, authenticated }) => {
  const UNAUTHORIZED_STATUSES = [401, 403, 500];
  const status = extractStatusCode(error);

  const expiredToken = (token || authenticated) && !getTokenFromLocalStorage();

  if (UNAUTHORIZED_STATUSES.includes(status) && expiredToken) {
    return { expireToken: true };
  }

  return { expireToken: false };
};
