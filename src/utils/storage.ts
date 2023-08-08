export const getStored = (key: string) => localStorage.getItem(key);

export const setStore = (key: string, data: any) => {
  return localStorage.setItem(key, data);
};
export const removeStored = (key: string) => localStorage.removeItem(key);
