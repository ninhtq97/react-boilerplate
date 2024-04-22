export type Tail<X extends readonly any[]> = ((...args: X) => any) extends (
  arg: any,
  ...rest: infer U
) => any
  ? U
  : never;

export type Status = 'FAILED' | 'IDLE' | 'LOADING';
export type Position = 'top' | 'bottom' | 'left' | 'right';

export type Start = 'start';
export type Center = 'center';
export type End = 'end';

export type Placement =
  | `${Position}-${Start}`
  | Position
  | `${Position}-${End}`;

export type TScreenDimension = {
  width: number;
  height: number;
};

export type TFilter = {
  page: number;
  take: number;
  keyword?: string;
} & Record<string, any>;

export type TMeta = {
  page: number;
  take: number;
  total: number;
  totalPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type TPagination<T> = {
  docs: T[];
  meta: TMeta;
};

export type TDateRange = {
  startDate: string | Date | null;
  endDate: string | Date | null;
} | null;

export type TStatus = {
  status: Status;
};

export type TId = {
  id: string;
};

export type TTimestamp = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Option = {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
};

export type HeadCell = {
  id: string;
  label: string | React.ReactNode;
} & React.ThHTMLAttributes<HTMLTableCellElement>;

export type TAttachment = { name: string; path: string };
