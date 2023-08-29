import { TFilter, TMeta } from 'types';
import { PAGE } from './pagination';

export const INIT_META: TMeta = {
  page: PAGE.NUMBER,
  take: PAGE.SIZE,
  total: 0,
  totalPage: 0,
  hasPreviousPage: false,
  hasNextPage: true,
};

export const INIT_FILTER: TFilter = {
  page: PAGE.NUMBER,
  take: PAGE.SIZE,
  keyword: '',
};
