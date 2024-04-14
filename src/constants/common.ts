import { TFilter, TMeta } from 'types';

export enum DATE_FORMAT {
  DATE = 'dd/MM/yyyy',
  DATE_TIME = 'dd/MM/yyyy - HH:mm:ss',
  EN_DATE = 'yyyy-MM-dd',
  TIME = 'HH:mm',
  HALF_TIME = 'hh:mm a',
  FULLTIME = 'HH:mm:ss',
  PICKER = 'DD/MM/YYYY',
}

export const PAGE = { NUMBER: 1, SIZE: 10 };

export const MIME_TYPE = {
  IMG: [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/avif',
    'image/gif',
    'image/webp',
  ],
  DOCS: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  EXCEL: [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
  ],
};

export const INIT_META: TMeta = {
  page: PAGE.NUMBER,
  take: PAGE.SIZE,
  total: 0,
  totalPage: 0,
  hasPreviousPage: false,
  hasNextPage: false,
};

export const INIT_FILTER: TFilter = {
  page: PAGE.NUMBER,
  take: PAGE.SIZE,
  keyword: '',
};
