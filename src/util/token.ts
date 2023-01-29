import LocalStorage from "./localstorage";

export const tokenSaveToStorage = (tokenKey: string, token: string) => {
  LocalStorage.setItem(tokenKey, token);
};

export const tokenRemoveInStorage = (tokenKey: string) => {
  LocalStorage.removeItem(tokenKey);
};
