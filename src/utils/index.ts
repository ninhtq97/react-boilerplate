export { default as api } from './api';
export * from './array';
export * from './date';
export * from './error';
export * from './storage';
export * from './string';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const excludeEmptyValue = <T extends {}>(obj: T): T => {
  Object.keys(obj).forEach((k) => !obj[k] && delete obj[k]);
  return obj;
};

export const recursiveRoutes = (
  routes: Record<string, any>,
  parentPath = '/',
) => {
  for (let key in routes) {
    if (typeof routes[key] === 'object') {
      recursiveRoutes(
        routes[key],
        parentPath + (routes[key].SELF ? `${routes[key].SELF}/` : ''),
      );
    } else {
      if (key !== 'SELF') {
        routes[key] = parentPath + routes[key];
      } else {
        routes[key] = parentPath.slice(0, parentPath.length - 1);
      }
    }
  }
  return routes;
};
