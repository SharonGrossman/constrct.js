export const getTokenFromLocalStorage = () => localStorage.getItem('token');
export const setLocalStorageToken = token => localStorage.setItem('token', token);
export const removeTokenFromLocalStorage = () => localStorage.removeItem('token');
