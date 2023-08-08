import * as yup from 'yup';
import { ERROR_MSG } from './message';

export const VALIDATIONS = {
  TEXT: yup.string(),
  TEXT_REQUIRED: yup.string().required(ERROR_MSG.REQUIRED),
  get TEXT_REQUIRED_TRIM() {
    return this.TEXT_REQUIRED.trim();
  },
  get TEXT_NOT_WHITESPACE() {
    return this.TEXT_REQUIRED.trim(ERROR_MSG.TRIM)
      .strict(true)
      .matches(/^(\S+$)/, ERROR_MSG.NOT_WHITESPACE);
  },
  get EMAIL() {
    return this.TEXT_NOT_WHITESPACE.email(ERROR_MSG.EMAIL);
  },
  get PASSWORD() {
    return this.TEXT_REQUIRED.matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[^\w\s])\S{8,16}$/,
      ERROR_MSG.PASSWORD,
    );
  },
  get CONFIRM_PASSWORD() {
    return (ref: string) =>
      this.TEXT_REQUIRED.oneOf([yup.ref(ref)], ERROR_MSG.CONFIRM_PASSWORD);
  },
  get PARTNER_TX_ID() {
    return this.TEXT_NOT_WHITESPACE.max(
      30,
      ERROR_MSG.MAX_LENGTH.replace('{length}', '30'),
    );
  },
};
