import slugify from 'slugify';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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
) => `${+amount ? new Intl.NumberFormat(locales).format(+amount) : amount}`;

export const toCurrency = (amount: string | number, currency: string = 'đ') =>
  `${toIntlNumber(amount)}${currency}`;

export const toLocaleNumber = (amount: string, locales: string = 'de-DE') => {
  const thousandSeparator = Intl.NumberFormat(locales)
    .format(11111)
    .replace(/\p{Number}/gu, '');
  const decimalSeparator = Intl.NumberFormat(locales)
    .format(1.1)
    .replace(/\p{Number}/gu, '');

  return parseFloat(
    amount
      .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
      .replace(new RegExp(`\\${decimalSeparator}`), '.'),
  );
};
