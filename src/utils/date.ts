import { DATE_FORMAT } from 'constants/common';
import { format } from 'date-fns';

export const formatDate = (
  date: string | number | Date,
  formatStr = DATE_FORMAT.DATE,
) => (date ? format(new Date(date), formatStr) : date);
