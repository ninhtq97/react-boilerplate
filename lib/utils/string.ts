import slugify from 'slugify';

export const toFixedNumber = (num: number, decimals = 2) => {
  return parseFloat(num.toFixed(decimals));
};

export const toSlug = (
  str: string,
  options?: {
    replacement?: string;
    remove?: RegExp;
    lower?: boolean;
    strict?: boolean;
    locale?: string;
    trim?: boolean;
  },
): string => {
  return slugify(str, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: 'vi',
    trim: true,
    ...options,
  });
};

export const toIntlNumber = (
  amount: string | number,
  locales: string = 'de-DE',
) => (+amount ? new Intl.NumberFormat(locales).format(+amount) : amount);

export const toCurrency = (amount: string | number, currency: string = 'đ') =>
  `${toIntlNumber(amount)}${currency}`;
