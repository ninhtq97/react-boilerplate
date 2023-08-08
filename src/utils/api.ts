import axios, { AxiosRequestConfig, Method } from 'axios';
import { Tail } from 'types';

const defaults = {
  headers: () => ({ 'Content-Type': 'application/json' }),
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

type CreateAxiosApiFn = (
  method: Method,
  url?: string,
  variables?: Record<string, any>,
  config?: AxiosRequestConfig,
) => Promise<any>;

type RestParams = Tail<Parameters<CreateAxiosApiFn>>;

const createAxiosApi: CreateAxiosApiFn = (method, url, variables, config) =>
  new Promise((resolve, reject) => {
    const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      headers: defaults.headers(),
      params: method === 'GET' ? variables : undefined,
      data: method !== 'GET' ? variables : undefined,
      ...config,
    };

    axios(axiosConfig).then(
      (response) => resolve(response.data),
      (error) => {
        reject(error.response ? error.response.data : defaults.error);
      },
    );
  });

const api = {
  get: (...args: RestParams) => createAxiosApi('GET', ...args),
  post: (...args: RestParams) => createAxiosApi('POST', ...args),
  put: (...args: RestParams) => createAxiosApi('PUT', ...args),
  patch: (...args: RestParams) => createAxiosApi('PATCH', ...args),
  delete: (...args: RestParams) => createAxiosApi('DELETE', ...args),
};

export default api;
