export const getFromLocalStorage = ({ key }) => localStorage.getItem(key);
export const setLocalStorage = ({ key, value }) => localStorage.setItem(key, value);
export const removeFromLocalStorage = ({ key }) => localStorage.removeItem(key);
