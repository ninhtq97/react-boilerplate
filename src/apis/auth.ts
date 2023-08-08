import { API_ROUTES } from 'constants/api';
import { TChangePassword, TMe, TSignIn } from 'types';
import { api } from 'utils';

export const fetchMe = async (token?: string): Promise<TMe> => {
  const res = await api.get(
    API_ROUTES.ACCOUNT.ME,
    {},
    token
      ? {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      : {},
  );
  return res;
};

export const signIn = async (data: TSignIn): Promise<string> => {
  const res = await api.post(API_ROUTES.AUTH.SIGN_IN, data);
  return res;
};

export const changePassword = async (data: TChangePassword) => {
  const res = await api.post(API_ROUTES.AUTH.CHANGE_PASSWORD, {
    password: data.password,
    newPassword: data.newPassword,
  });
  return res;
};
