import { recursiveRoutes } from 'utils';

export const ROUTES = {
  SELF: '',
  HOME: '',
  AUTH: {
    SELF: 'auth',
    SIGN_IN: 'sign-in',
  },
  OVERVIEW: 'overview',
  MERCHANT: {
    SELF: 'merchant',
    CONTRACT: {
      SELF: 'contract',
      DETAIL: ':id',
    },
  },
  TX: {
    SELF: 'tx',
    REFUND: 'refund',
    DISPARATE: {
      SELF: 'disparate',
      HISTORY: 'history',
    },
  },
  CATEGORY: {
    SELF: 'category',
    BANK: 'bank',
    BUSINESS_TYPE: 'business-type',
  },
  NOTIFICATION: 'notification',
  REPORT: {
    SELF: 'report',
    MERCHANT: 'merchant',
    PARTNER: 'partner',
  },
  ACCOUNTANT: {
    SELF: 'accountant',
    REFUND: 'refund',
    PARTNER_CROSS_CHECK: 'partner-cross-check',
    MERCHANT_CROSS_CHECK: 'merchant-cross-check',
  },
  SETTING: {
    SELF: 'setting',
    DATE_CROSS_CHECK: {
      SELF: 'date-cross-check',
      MERCHANT: 'per-merchant',
    },
    FEE: 'fee',
    PAYMENT_METHOD: {
      SELF: 'payment-method',
      MERCHANT: 'per-merchant',
    },
    DECENTRALIZATION: {
      SELF: 'decentralization',
      DETAIL: ':id',
    },
    ACCOUNT: 'account',
  },
  ERROR: {
    SELF: 'error',
    NOT_FOUND: '404',
  },
};

export const ROUTE_PATHS: typeof ROUTES = JSON.parse(JSON.stringify(ROUTES));

recursiveRoutes(ROUTE_PATHS);

console.log('ROUTE_PATHS:', ROUTE_PATHS);

export const ROUTE_TITLES = {
  OVERVIEW: 'Tổng quan',
  MERCHANT: {
    SELF: 'Danh sách tài khoản Merchant',
    CONTRACT: {
      SELF: 'Quản lý hợp đồng',
      DETAIL: 'Chi tiết hợp đồng',
    },
  },
  TX: {
    SELF: 'Danh sách giao dịch',
    REFUND: 'Danh sách giao dịch hoàn trả',
    DISPARATE: {
      SELF: 'Danh sách giao dịch lệch đối soát',
      HISTORY: 'Lịch sử cập nhật',
    },
  },
  CATEGORY: {
    SELF: 'Danh sách danh mục',
    BANK: 'Danh sách danh mục ngân hàng',
    BUSINESS_TYPE: 'Danh sách danh mục loại hình doanh nghiệp',
  },
  NOTIFICATION: 'Danh sách thông báo',
  REPORT: {
    SELF: 'Báo cáo',
    MERCHANT: 'Báo cáo theo Merchant',
    PARTNER: 'Báo cáo theo Đối tác',
  },
  ACCOUNTANT: {
    REFUND: 'Danh sách lệnh hoàn tiền',
    CROSS_CHECK: 'Danh sách lệnh đối soát',
  },
  SETTING: {
    SELF: 'Cấu hình',
    DATE_CROSS_CHECK: {
      SELF: 'Cấu hình ngày đối soát',
      MERCHANT: 'Cấu hình đối soát cho từng  Merchant',
    },
    FEE: 'Cấu hình phí giao dịch',
    PAYMENT_METHOD: {
      SELF: 'Phương thức thanh toán',
      MERCHANT: 'Phương thức thanh toán theo Merchant',
    },
    DECENTRALIZATION: 'Phân quyền',
    ACCOUNT: 'Danh sách tài khoản',
  },
};
