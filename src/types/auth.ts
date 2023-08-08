export type TSignIn = { email: string; password: string };

export type TChangePassword = {
  password: string;
  newPassword: string;
};

export type TMe = {
  id: string;
  name: string;
};
